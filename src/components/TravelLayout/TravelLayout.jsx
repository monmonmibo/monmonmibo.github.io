import { Link } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import styles from './TravelLayout.module.css';
import JpyToHkdConverter from '../JpyToHkdConverter';
import {
  CalendarIcon,
  CalculatorIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  HotelIcon,
  MapIcon,
  MapPinIcon,
} from '../Icons';

const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const cleanDisplayText = (value) => {
  if (typeof value !== 'string') return value;
  return value
    .replace(/[\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u200D]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
};

function formatDayTab(day) {
  if (day.date) {
    // A calendar date should show the same weekday in every time zone.
    const date = new Date(`${day.date}T00:00:00Z`);
    if (!Number.isNaN(date.getTime())) {
      const weekday = '日一二三四五六'[date.getUTCDay()];
      return `${date.getUTCMonth() + 1}/${date.getUTCDate()}（${weekday}）`;
    }
  }
  return cleanDisplayText(day.label || day.id.replace('day', 'Day '));
}

// Per-day transport costs. Amounts are strings so a leg with a range
// ("¥900-1,500") reads the same as a fixed one.
function FareTable({ fares }) {
  return (
    <section className={styles.fareBlock} aria-labelledby="fareHeading">
      <h3 id="fareHeading" className={styles.fareHeading}>車費預算（每人）</h3>

      {fares.days.map(day => (
        <table key={day.day} className={styles.fareTable}>
          <caption className={styles.fareCaption}>{day.day}</caption>
          <tbody>
            {day.items.map((item, i) => (
              <tr key={i}>
                <th scope="row" className={styles.fareLabel}>{item.label}</th>
                <td className={styles.fareAmount}>{item.amount}</td>
              </tr>
            ))}
            <tr className={styles.fareSubtotal}>
              <th scope="row" className={styles.fareLabel}>小計</th>
              <td className={styles.fareAmount}>{day.total}</td>
            </tr>
          </tbody>
        </table>
      ))}

      <p className={styles.fareGrand}>
        <span>{fares.totalLabel || '合計'}</span>
        <strong className={styles.fareAmount}>{fares.total}</strong>
      </p>

      {fares.notes && (
        <ul className={styles.fareNotes}>
          {fares.notes.map((note, i) => <li key={i}>{note}</li>)}
        </ul>
      )}
    </section>
  );
}

function readTodos(data) {
  const loaded = {};
  (data.todos || []).forEach(todo => {
    loaded[todo.id] = localStorage.getItem(`${data.id}-${todo.id}`) === 'true';
  });
  return loaded;
}

export default function TravelLayout({ data }) {
  const [activeTab, setActiveTab] = useState('day1');
  const [view, setView] = useState('timeline');
  const [hasOpenedMap, setHasOpenedMap] = useState(false);
  const [mapMode, setMapMode] = useState('map');
  const [hasOpenedTools, setHasOpenedTools] = useState(false);
  const viewScrollPositions = useRef({ timeline: 0, tools: 0, map: 0 });
  const dateNavRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  // Read straight from localStorage on first render. Doing this in an effect
  // instead made the list flash every box unchecked before correcting itself.
  const [todos, setTodos] = useState(() => readTodos(data));

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

  // Restore after the new view mounts, before paint; the previous view may
  // have a very different height and its scroll offset must not carry over.
  useLayoutEffect(() => {
    window.scrollTo({ top: viewScrollPositions.current[view], left: 0, behavior: 'instant' });
  }, [view]);

  useEffect(() => {
    let ticking = false;
    const updateScrollState = () => {
      const nextScrolled = window.scrollY > 24;
      setIsScrolled(current => current === nextScrolled ? current : nextScrolled);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inject trip-specific manifest + update document/iOS title
  useEffect(() => {
    const prevDocTitle = document.title;
    document.title = data.header.title;

    const metaTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    const prevMetaTitle = metaTitle?.content;
    if (metaTitle) metaTitle.content = data.header.title;

    // Derive short name: "Kobe & Awaji Trip 🇯🇵" → "Kobe & Awaji 🇯🇵"
    const shortName = data.header.title.replace(/\s*Trip\s*/i, ' ').trim();

    const tripManifest = {
      name: data.header.title,
      short_name: shortName,
      start_url: window.location.pathname,
      scope: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#79543c',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    };
    const blob = new Blob([JSON.stringify(tripManifest)], { type: 'application/manifest+json' });
    const blobUrl = URL.createObjectURL(blob);
    const existing = document.querySelector('link[rel="manifest"]');
    const prevHref = existing?.href;
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = blobUrl;
    if (existing) existing.parentNode.replaceChild(link, existing);
    else document.head.appendChild(link);

    return () => {
      document.title = prevDocTitle;
      URL.revokeObjectURL(blobUrl);
      if (metaTitle && prevMetaTitle) metaTitle.content = prevMetaTitle;
      if (prevHref) {
        const restore = document.createElement('link');
        restore.rel = 'manifest';
        restore.href = prevHref;
        link.parentNode?.replaceChild(restore, link);
      }
    };
  }, [data.id, data.header.title]);

  const spotGroups = useMemo(() => data.days.flatMap(day => {
    const spots = new Map();
    for (const item of day.timeline || []) {
      if (item.mapQuery && !spots.has(item.mapQuery)) {
        spots.set(item.mapQuery, { title: item.title, href: mapsUrl(item.mapQuery) });
      }
    }
    return spots.size ? [{ day, spots: [...spots.values()] }] : [];
  }), [data.days]);

  const handleTodoChange = (todoId) => {
    const newState = !todos[todoId];
    setTodos(prev => ({ ...prev, [todoId]: newState }));
    localStorage.setItem(`${data.id}-${todoId}`, newState);
  };

  const handleTabClick = (dayId) => {
    setActiveTab(dayId);
    setView('timeline');
    window.scrollTo(0, 0);
  };

  const jumpToStop = (dayId, index) => {
    const stop = document.getElementById(`stop-${dayId}-${index}`);
    if (!stop) return;

    stop.querySelector('h2')?.focus({ preventScroll: true });
    const navHeight = dateNavRef.current?.offsetHeight ?? 0;
    window.scrollTo({ top: window.scrollY + stop.getBoundingClientRect().top - navHeight, behavior: 'instant' });
  };

  // Every id in the date rail, in visual order — drives arrow-key navigation
  const tabIds = [...data.days.map(d => d.id), ...(data.todos ? ['todo'] : [])];

  const tabsRef = useRef(null);
  const [tabOverflow, setTabOverflow] = useState({ left: false, right: false });

  useEffect(() => {
    const rail = tabsRef.current;
    if (!rail) return;
    const update = () => setTabOverflow({
      left: rail.scrollLeft > 1,
      right: rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 1,
    });
    const frame = requestAnimationFrame(update);
    const observer = new ResizeObserver(update);
    observer.observe(rail);
    rail.addEventListener('scroll', update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      rail.removeEventListener('scroll', update);
    };
  }, [data.id, tabIds.length, view]);

  const scrollTabs = (direction) => {
    const rail = tabsRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.75,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

  // Timetables start at the first column, while the planned departure may be
  // farther right. Scroll to its marked column, keeping station labels visible.
  useEffect(() => {
    if (view !== 'timeline') return;
    const panel = document.getElementById(`panel-${activeTab}`);
    if (!panel) return;
    panel.querySelectorAll('.trip-timetable-wrap').forEach(wrap => {
      const target = wrap.querySelector('.is-taken-start');
      if (!target) return;
      const pinned = wrap.querySelector('tbody th');
      const pinnedWidth = pinned ? pinned.getBoundingClientRect().width : 0;
      const delta =
        target.getBoundingClientRect().left -
        wrap.getBoundingClientRect().left -
        pinnedWidth;
      wrap.scrollLeft += delta;
    });
  }, [activeTab, view]);

  // Moving focus also scrolls the selected date into the rail viewport.
  const handleTabKeyDown = (e) => {
    const map = { ArrowRight: 1, ArrowLeft: -1, Home: 'first', End: 'last' };
    const move = map[e.key];
    if (move === undefined) return;
    e.preventDefault();
    const i = tabIds.indexOf(activeTab);
    const next =
      move === 'first' ? tabIds[0]
      : move === 'last' ? tabIds[tabIds.length - 1]
      : tabIds[(i + move + tabIds.length) % tabIds.length];
    handleTabClick(next);
    requestAnimationFrame(() => {
      const tab = document.getElementById(`tab-${next}`);
      tab?.focus({ preventScroll: true });
      tab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
  };

  const handleViewClick = (newView) => {
    if (newView === view) return;
    viewScrollPositions.current[view] = window.scrollY;
    if (newView === 'map') setHasOpenedMap(true);
    if (newView === 'tools') setHasOpenedTools(true);
    setView(newView);
  };

  const renderViewIcon = (viewId) => {
    if (viewId === 'tools') return <CalculatorIcon size={18} />;
    if (viewId === 'map') return <MapIcon size={18} />;
    return <CalendarIcon size={18} />;
  };

  const renderHotelHeader = (day) => {
    if (!day.hotel) return null;
    return (
      <div className={`${styles.hotelHeader}`}>
        <div className={styles.hotelInfo}>
          <HotelIcon size={20} />
          <div className={styles.hotelDetails}>
            <small>住宿</small>
            <strong>{day.hotel}</strong>
            {day.hotelNote && <span className={styles.hotelNote}>{day.hotelNote}</span>}
          </div>
        </div>
        {day.hotelQuery && (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${day.hotelQuery}`}
            target="_blank"
            rel="noreferrer"
            className={styles.hotelNavBtn}
            aria-label={`在 Google Maps 開啟 ${day.hotel}（新視窗）`}
          >
            <MapPinIcon size={16} />
            導航
          </a>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <a href="#main-content" className={styles.skipLink}>跳到行程內容</a>

      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1>{cleanDisplayText(data.header.title)}</h1>
          {!isStandalone && (
            <Link to="/" className={styles.homeLink}>
              <HomeIcon size={17} />
              <span>首頁</span>
            </Link>
          )}
        </div>
        <p className={styles.headerSubtitle}>{cleanDisplayText(data.header.subtitle)}</p>
        <dl className={styles.headerMeta} aria-label="行程摘要">
          <div><dt>日數</dt><dd>{data.days.length} 日</dd></div>
          <div><dt>行程</dt><dd>{data.days.reduce((total, day) => total + day.timeline.length, 0)} 項安排</dd></div>
        </dl>
      </header>

      {view === 'timeline' && (
        <div ref={dateNavRef} className={`${styles.stickyNav} ${isScrolled ? styles.stickyNavScrolled : ''}`}>
          <div className={styles.dateControls}>
            <button type="button" className={styles.dateScrollButton} aria-label="向左捲動日期" aria-controls="trip-date-tabs" disabled={!tabOverflow.left} onClick={() => scrollTabs(-1)}>
              <ChevronLeftIcon size={20} />
            </button>
          <div id="trip-date-tabs" ref={tabsRef} className={styles.dateTabs} role="tablist" aria-label="行程日期" onKeyDown={handleTabKeyDown}>
            {tabIds.map(id => {
              const day = data.days.find(d => d.id === id);
              const selected = activeTab === id;
              const shown = selected && view === 'timeline';
              return (
                <button
                  key={id}
                  id={`tab-${id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={shown ? `panel-${id}` : undefined}
                  tabIndex={selected ? 0 : -1}
                  className={`${styles.dateChip} ${shown ? styles.active : ''}`}
                  onClick={() => handleTabClick(id)}
                >
                  {day ? formatDayTab(day) : 'To-Do'}
                </button>
              );
            })}
          </div>
            <button type="button" className={styles.dateScrollButton} aria-label="向右捲動日期" aria-controls="trip-date-tabs" disabled={!tabOverflow.right} onClick={() => scrollTabs(1)}>
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      )}

      <main id="main-content">
        {/* Day Sections */}
        {view === 'timeline' && data.days.map(day => (
          activeTab === day.id && (
            <div
              key={day.id}
              id={`panel-${day.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${day.id}`}
              tabIndex={0}
              className={`${styles.daySection} ${styles.active} ${styles.structuredDay}`}
            >
              {day.timeline.length >= 7 && (
                <details className={`trip-collapse ${styles.stopDirectory}`}>
                  <summary>跳到行程</summary>
                  <ol>
                    {day.timeline.map((item, index) => (
                      <li key={index}>
                        <button type="button" onClick={() => jumpToStop(day.id, index)}>
                          {cleanDisplayText(item.title)}
                        </button>
                      </li>
                    ))}
                  </ol>
                </details>
              )}
              {renderHotelHeader(day)}
              <div className={styles.timelineContainer}>
                <div className={styles.timeline}>
                  {day.timeline.map((item, idx) => (
                    <div key={idx} id={`stop-${day.id}-${idx}`} className={`${styles.timelineItem} ${item.type === 'highlight' ? styles.highlight : ''}`}>
                      <div className={styles.itemMeta}>
                        <div className={styles.timeLabel}>{item.time}</div>
                        {item.category && (
                          <span className={styles.itemCategory}>{item.category}</span>
                        )}
                      </div>
                      <div className={styles.card}>
                        <div className={styles.cardHead}>
                          <h2 tabIndex={-1} className={styles.itemTitle}>{cleanDisplayText(item.title)}</h2>
                          {item.mapQuery && (
                            <a
                              href={mapsUrl(item.mapQuery)}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.itemNavBtn}
                              aria-label={`在 Google Maps 開啟 ${item.mapQuery}（新視窗）`}
                            >
                              <MapPinIcon size={16} />
                              導航
                            </a>
                          )}
                        </div>
                        {item.summary && (
                          <p className={styles.itemSummary}>{item.summary}</p>
                        )}
                        <div className={styles.details}>{item.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        ))}

        {/* To-Do Section */}
        {view === 'timeline' && activeTab === 'todo' && data.todos && (
          <div
            id="panel-todo"
            role="tabpanel"
            aria-labelledby="tab-todo"
            tabIndex={0}
            className={`${styles.daySection} ${styles.active}`}
          >
            <div className={styles.todoListGroup}>
              <h3 className={styles.todoListTitle}>購物同出發前準備清單</h3>
              {data.todos.map(todo => (
                <label key={todo.id} className={`${styles.todoLabel}`}>
                  <input
                    type="checkbox"
                    checked={!!todos[todo.id]}
                    onChange={() => handleTodoChange(todo.id)}
                  />
                  <div className={styles.todoTextContainer}>
                    <span className={styles.todoMainText}>{todo.main}</span>
                    <span className={styles.todoSubText}>{todo.sub}</span>
                  </div>
                  <div className={styles.checkCircle}></div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {hasOpenedTools && (
          <div hidden={view !== 'tools'} className={`${styles.daySection} ${view === 'tools' ? styles.active : ''} ${styles.toolsSection}`}>
            {data.customTools ? data.customTools : <JpyToHkdConverter />}
            {data.fares && <FareTable fares={data.fares} />}
          </div>
        )}

        {/* Map */}
        {hasOpenedMap && (
          <div hidden={view !== 'map'} className={`${styles.daySection} ${view === 'map' ? styles.active : ''}`}>
            {data.mapIframe && (
              <>
                <div className={styles.mapControls} role="group" aria-label="地圖檢視">
                  <button type="button" className={styles.mapModeButton} aria-pressed={mapMode === 'map'} onClick={() => setMapMode('map')}>
                    互動地圖
                  </button>
                  <button type="button" className={styles.mapModeButton} aria-pressed={mapMode === 'list'} onClick={() => setMapMode('list')}>
                    地點清單
                  </button>
                </div>
                <div hidden={mapMode !== 'map'}>
                  <div className={styles.mapFrame}>
                    <iframe
                      src={data.mapIframe}
                      className={styles.mapIframe}
                      allowFullScreen=""
                      loading="lazy"
                      title={`${data.header.title} 地圖`}
                    />
                  </div>
                </div>
              </>
            )}
            <div className={styles.spotList} hidden={Boolean(data.mapIframe) && mapMode !== 'list'}>
              <h2 className={styles.spotListTitle}>{data.mapIframe ? '地點清單' : cleanDisplayText(data.mapText || '景點地圖')}</h2>
              {!data.mapIframe && data.mapQuery && (
                <a
                  href={mapsUrl(data.mapQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.spotListOpenAll}
                >
                  <MapIcon size={18} />
                  在 Google Maps 開啟 {data.mapQuery}
                </a>
              )}
              {spotGroups.length ? spotGroups.map(({ day, spots }) => (
                <section key={day.id} className={styles.spotGroup} aria-labelledby={`spots-${day.id}`}>
                  <h3 id={`spots-${day.id}`}>{formatDayTab(day)}</h3>
                  <ul>
                    {spots.map(spot => (
                      <li key={spot.href}>
                        <a
                          href={spot.href}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.spotRow}
                          aria-label={`${spot.title}，在 Google Maps 開啟（新視窗）`}
                        >
                          <span className={styles.spotName}>{spot.title}</span>
                          <span className={styles.spotArrow}><MapPinIcon size={18} /></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )) : (
                <p className={styles.spotEmpty}>呢個行程暫時未有地點資料。</p>
              )}
            </div>
          </div>
        )}
      </main>

      <nav className={styles.bottomNav} aria-label="主要檢視">
        {[
          { id: 'timeline', label: '行程' },
          { id: 'tools', label: '工具' },
          { id: 'map', label: '地圖' },
        ].map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={view === id}
            className={`${styles.navBtn} ${view === id ? styles.active : ''}`}
            onClick={() => handleViewClick(id)}
          >
            {renderViewIcon(id)}
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

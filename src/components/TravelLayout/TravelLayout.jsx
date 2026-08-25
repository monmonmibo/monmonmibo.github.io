import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import styles from './TravelLayout.module.css';
import JpyToHkdConverter from '../JpyToHkdConverter';

const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

// Per-day transport costs. Amounts are strings so a leg with a range
// ("¥900-1,500") reads the same as a fixed one.
function FareTable({ fares }) {
  return (
    <section className={styles.fareBlock} aria-labelledby="fareHeading">
      <h3 id="fareHeading" className={styles.fareHeading}>🚃 車費預算（每人）</h3>

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
  // Read straight from localStorage on first render. Doing this in an effect
  // instead made the list flash every box unchecked before correcting itself.
  const [todos, setTodos] = useState(() => readTodos(data));

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

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
      background_color: '#003366',
      theme_color: '#003366',
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

  // Every timeline stop that carries a mapQuery, deduped — powers the map tab fallback.
  const spots = useMemo(() => {
    const seen = new Set();
    const out = [];
    data.days.forEach(day => {
      (day.timeline || []).forEach(item => {
        if (!item.mapQuery || seen.has(item.mapQuery)) return;
        seen.add(item.mapQuery);
        out.push({ dayLabel: day.label || day.id, title: item.title, query: item.mapQuery });
      });
    });
    return out;
  }, [data]);

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

  // Every id in the date rail, in visual order — drives arrow-key navigation
  const tabIds = [...data.days.map(d => d.id), ...(data.todos ? ['todo'] : [])];

  // Arrow keys move between tabs, per the ARIA tabs pattern. Without this,
  // role="tab" would promise a keyboard behaviour the rail did not have.
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
    requestAnimationFrame(() => document.getElementById(`tab-${next}`)?.focus());
  };

  const handleViewClick = (newView) => {
    setView(newView);
  };

  const renderHotelHeader = (day) => {
    if (!day.hotel) return null;
    return (
      <div className={styles.hotelHeader}>
        <span>
          {day.hotelNote ? `🏨 住：${day.hotel} ｜ ${day.hotelNote}` : `🏨 住：${day.hotel}`}
        </span>
        {day.hotelQuery && (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${day.hotelQuery}`}
            target="_blank"
            rel="noreferrer"
            className={styles.hotelNavBtn}
            aria-label={`在 Google Maps 開啟 ${day.hotel}（新視窗）`}
          >
            📍 導航
          </a>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <a href="#main-content" className={styles.skipLink}>跳至行程內容</a>

      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1>{data.header.title}</h1>
          {!isStandalone && <Link to="/" className={styles.homeLink}>🏠 主頁</Link>}
        </div>
        <p>{data.header.subtitle}</p>
      </header>

      <div className={styles.stickyNav}>
        <div className={styles.dateTabs} role="tablist" aria-label="行程日期" onKeyDown={handleTabKeyDown}>
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
                {day ? (day.label || id.replace('day', 'Day ')) : 'To-Do'}
              </button>
            );
          })}
        </div>
      </div>

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
              className={`${styles.daySection} ${styles.active}`}
            >
              {renderHotelHeader(day)}
              <div className={styles.timelineContainer}>
                <div className={styles.timeline}>
                  {day.timeline.map((item, idx) => (
                    <div key={idx} className={`${styles.timelineItem} ${item.type === 'highlight' ? styles.highlight : ''}`}>
                      <div className={styles.timeLabel}>{item.time}</div>
                      <div className={styles.card}>
                        <div className={styles.cardHead}>
                          <span className={styles.itemTitle}>{item.title}</span>
                          {item.mapQuery && (
                            <a
                              href={mapsUrl(item.mapQuery)}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.itemNavBtn}
                              aria-label={`在 Google Maps 開啟 ${item.mapQuery}（新視窗）`}
                            >
                              📍 導航
                            </a>
                          )}
                        </div>
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
              <h3 className={styles.todoListTitle}>📝 必買 & 準備清單</h3>
              {data.todos.map(todo => (
                <label key={todo.id} className={styles.todoLabel}>
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
        {view === 'tools' && (
          <div className={`${styles.daySection} ${styles.active} ${styles.toolsSection}`}>
            {data.customTools ? data.customTools : <JpyToHkdConverter />}
            {data.fares && <FareTable fares={data.fares} />}
          </div>
        )}

        {/* Map */}
        {view === 'map' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {data.mapIframe ? (
              <div className={styles.mapFrame}>
                <iframe
                  src={data.mapIframe}
                  width="100%"
                  height="100%"
                  className={styles.mapIframe}
                  allowFullScreen=""
                  loading="lazy"
                  title={`${data.header.title} 地圖`}
                ></iframe>
              </div>
            ) : (
              // No custom My Map for this trip — fall back to a tappable list of every stop.
              <div className={styles.spotList}>
                <h3 className={styles.spotListTitle}>{data.mapText || '🗺️ 景點地圖'}</h3>
                {data.mapQuery && (
                  <a
                    href={mapsUrl(data.mapQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.spotListOpenAll}
                    aria-label={`在 Google Maps 開啟${data.mapQuery}（新視窗）`}
                  >
                    🌏 在 Google Maps 開啟{data.mapQuery}
                  </a>
                )}
                {spots.length > 0 ? (
                  spots.map(spot => (
                    <a
                      key={spot.query}
                      href={mapsUrl(spot.query)}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.spotRow}
                      aria-label={`${spot.dayLabel}：在 Google Maps 開啟 ${spot.title}（新視窗）`}
                    >
                      <span className={styles.spotDay}>{spot.dayLabel}</span>
                      <span className={styles.spotName}>{spot.title}</span>
                      <span className={styles.spotArrow}>📍</span>
                    </a>
                  ))
                ) : (
                  <p className={styles.spotEmpty}>這個行程未加地點資料。</p>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <nav className={styles.bottomNav} aria-label="主要檢視">
        {[
          { id: 'timeline', label: '📅 行程' },
          { id: 'tools', label: '🧮 工具' },
          { id: 'map', label: '🗺️ 地圖' },
        ].map(v => (
          <button
            key={v.id}
            type="button"
            aria-pressed={view === v.id}
            className={`${styles.navBtn} ${view === v.id ? styles.active : ''}`}
            onClick={() => handleViewClick(v.id)}
          >
            {v.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

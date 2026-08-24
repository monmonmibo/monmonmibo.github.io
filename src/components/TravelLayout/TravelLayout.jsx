import { Link } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import styles from './TravelLayout.module.css';
import JpyToHkdConverter from '../JpyToHkdConverter';

const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

// Collapse long details behind a "睇多啲" toggle so the timeline stays scannable on the road.
const COLLAPSE_MAX_PX = 132;

function Details({ children }) {
  const ref = useRef(null);
  const [needsToggle, setNeedsToggle] = useState(false);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (el) setNeedsToggle(el.scrollHeight > COLLAPSE_MAX_PX + 24);
  }, [children]);

  const clamped = needsToggle && !open;

  return (
    <>
      <div ref={ref} className={`${styles.details} ${clamped ? styles.detailsClamped : ''}`}>
        {children}
      </div>
      {needsToggle && (
        <button
          type="button"
          className={styles.detailsToggle}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? '▴ 收起' : '▾ 睇多啲'}
        </button>
      )}
    </>
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
          >
            📍 導航
          </a>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h1>{data.header.title}</h1>
          {!isStandalone && <Link to="/" className={styles.homeLink}>🏠 主頁</Link>}
        </div>
        <p>{data.header.subtitle}</p>
      </div>

      <div className={styles.stickyNav}>
        <div className={styles.dateTabs}>
          {data.days.map(day => (
            <button
              key={day.id}
              type="button"
              aria-pressed={activeTab === day.id && view === 'timeline'}
              className={`${styles.dateChip} ${activeTab === day.id && view === 'timeline' ? styles.active : ''}`}
              onClick={() => handleTabClick(day.id)}
            >
              {day.label || day.id.replace('day', 'Day ')}
            </button>
          ))}
          {data.todos && (
            <button
              type="button"
              aria-pressed={activeTab === 'todo' && view === 'timeline'}
              className={`${styles.dateChip} ${activeTab === 'todo' && view === 'timeline' ? styles.active : ''}`}
              onClick={() => handleTabClick('todo')}
            >
              To-Do
            </button>
          )}
        </div>
      </div>

      <div id="main-content">
        {/* Day Sections */}
        {view === 'timeline' && data.days.map(day => (
          activeTab === day.id && (
            <div key={day.id} className={`${styles.daySection} ${styles.active}`}>
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
                              aria-label={`在 Google Maps 開啟 ${item.mapQuery}`}
                            >
                              📍 導航
                            </a>
                          )}
                        </div>
                        <Details>{item.details}</Details>
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
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.todoListGroup}>
              <h3 style={{ marginLeft: '5px' }}>📝 必買 & 準備清單</h3>
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
          <div className={`${styles.daySection} ${styles.active}`} style={{ paddingTop: '20px' }}>
            {data.customTools ? data.customTools : <JpyToHkdConverter />}
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
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Map"
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
      </div>

      <div className={styles.bottomNav}>
        <button
          className={`${styles.navBtn} ${view === 'timeline' ? styles.active : ''}`}
          onClick={() => handleViewClick('timeline')}
        >
          📅 行程
        </button>
        <button
          className={`${styles.navBtn} ${view === 'tools' ? styles.active : ''}`}
          onClick={() => handleViewClick('tools')}
        >
          🧮 工具
        </button>
        <button
          className={`${styles.navBtn} ${view === 'map' ? styles.active : ''}`}
          onClick={() => handleViewClick('map')}
        >
          🗺️ 地圖
        </button>
      </div>
    </div>
  );
}

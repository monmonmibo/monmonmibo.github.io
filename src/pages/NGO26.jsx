import { useState, useEffect } from 'react';
import styles from './NGO26.module.css';

export default function NGO26() {
  const [activeTab, setActiveTab] = useState('day1');
  const [view, setView] = useState('timeline');
  const [todos, setTodos] = useState({});

  useEffect(() => {
    // Load todos
    const loadedTodos = {};
    for (let i = 1; i <= 3; i++) {
      const id = `ngo-todo-${i}`;
      loadedTodos[id] = localStorage.getItem(id) === 'true';
    }
    setTodos(loadedTodos);
  }, []);

  const handleTodoChange = (id) => {
    const newState = !todos[id];
    setTodos(prev => ({ ...prev, [id]: newState }));
    localStorage.setItem(id, newState);
  };

  const handleTabClick = (day) => {
    setActiveTab(day);
    setView('timeline');
    window.scrollTo(0, 0);
  };

  const handleViewClick = (newView) => {
    setView(newView);
    if (newView === 'timeline' && !activeTab) {
      setActiveTab('day1');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Nagoya Trip 🇯🇵</h1>
        <p>5日4夜・中部昇龍道 (Planning)</p>
      </div>

      <div className={styles.stickyNav}>
        <div className={styles.dateTabs}>
          {['day1', 'day2', 'day3', 'day4', 'day5', 'todo'].map(day => (
            <div
              key={day}
              className={`${styles.dateChip} ${activeTab === day && view === 'timeline' ? styles.active : ''}`}
              onClick={() => handleTabClick(day)}
            >
              {day === 'todo' ? 'To-Do' : day.replace('day', 'Day ')}
            </div>
          ))}
        </div>
      </div>

      <div id="main-content">
        {/* Day 1 */}
        {view === 'timeline' && activeTab === 'day1' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🏨 住宿：待定酒店 (TBD)</span>
              <a href="https://www.google.com/maps/search/Nagoya+Hotel" target="_blank" rel="noreferrer" className={styles.hotelNavBtn}>📍 搜尋</a>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛬 抵達名古屋中部機場 (NGO)</span>
                      <a href="https://www.google.com/maps/search/Chubu+Centrair+International+Airport" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>乘搭名鐵 μ-SKY 前往名古屋站 (約28分鐘)</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>15:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 酒店 Check-in</span>
                    <div className={styles.details}>放下行李</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Evening</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🍽️ 晚餐 / 自由活動</span>
                    <div className={styles.details}>...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 2 */}
        {view === 'timeline' && activeTab === 'day2' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>🏨 住宿：待定酒店</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}><span className={styles.itemTitle}>☀️ 早上行程 (待定)</span>
                    <div className={styles.details}>...</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Afternoon</div>
                  <div className={styles.card}><span className={styles.itemTitle}>🚶 下午行程 (待定)</span>
                    <div className={styles.details}>...</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Evening</div>
                  <div className={styles.card}><span className={styles.itemTitle}>🌙 晚餐 / 晚上行程</span>
                    <div className={styles.details}>...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 3 */}
        {view === 'timeline' && activeTab === 'day3' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>🏨 住宿：待定酒店</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>全日</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🗺️ 近郊一日遊 (建議)</span>
                    <div className={styles.details}>
                      (例如：白川鄉、吉卜力公園、犬山城)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 4 */}
        {view === 'timeline' && activeTab === 'day4' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>🏨 住宿：待定酒店</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}><span className={styles.itemTitle}>☀️ 早上行程 (待定)</span>
                    <div className={styles.details}>...</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Afternoon</div>
                  <div className={styles.card}><span className={styles.itemTitle}>🛍️ 購物 / 最後衝刺</span>
                    <div className={styles.details}>...</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Evening</div>
                  <div className={styles.card}><span className={styles.itemTitle}>🍽️ 最後晚餐</span>
                    <div className={styles.details}>...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 5 */}
        {view === 'timeline' && activeTab === 'day5' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>✈️ 回程</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}><span className={styles.itemTitle}>🏨 Check-out</span></div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>--:--</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚄 前往機場 (NGO)</span>
                    <div className={styles.details}>預留時間買手信</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>Departure</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛫 起飛回程</span>
                    <div className={styles.details}>Goodbye Nagoya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* To-Do */}
        {view === 'timeline' && activeTab === 'todo' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.todoListGroup}>
              <h3 style={{ marginLeft: '5px' }}>📝 準備清單</h3>
              <p style={{ marginLeft: '5px', fontSize: '0.8rem', color: '#888', marginBottom: '15px' }}>Auto-saved locally</p>

              {[
                { id: 'ngo-todo-1', main: '購買機票', sub: 'Check 航班價錢' },
                { id: 'ngo-todo-2', main: '預訂酒店', sub: '名古屋站附近？' },
                { id: 'ngo-todo-3', main: 'Visit Japan Web', sub: '入境申報' },
              ].map(todo => (
                <label key={todo.id} className={styles.todoLabel}>
                  <input
                    type="checkbox"
                    id={todo.id}
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

        {/* Map */}
        {view === 'map' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div style={{ margin: '-10px -20px 0', height: '80vh', position: 'relative' }}>
              <iframe
                src="https://www.google.com/maps/search/Nagoya+Hotel"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
              >
              </iframe>
            </div>
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
          className={`${styles.navBtn} ${view === 'map' ? styles.active : ''}`}
          onClick={() => handleViewClick('map')}
        >
          🗺️ 地圖
        </button>
      </div>
    </div>
  );
}

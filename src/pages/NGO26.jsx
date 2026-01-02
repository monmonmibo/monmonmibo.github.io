import { useState, useEffect } from 'react';
import styles from './NGO26.module.css';

export default function NGO26() {
  const [activeTab, setActiveTab] = useState('day1');
  const [view, setView] = useState('timeline');
  const [todos, setTodos] = useState({});

  useEffect(() => {
    // Load todos
    const loadedTodos = {};
    const todoIds = ['ngo-todo-1', 'ngo-todo-2', 'ngo-todo-3', 'ngo-todo-4', 'ngo-todo-5', 'ngo-todo-6'];
    todoIds.forEach(id => {
      loadedTodos[id] = localStorage.getItem(id) === 'true';
    });
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
        <p>🦀 名古屋 5日4夜 最終完美版</p>
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
              <span>🏨 住：名古屋站西口附近民宿</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Nagoya+Station+West+Exit" target="_blank" rel="noreferrer" className={styles.hotelNavBtn}>📍 導航</a>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>14:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛬 抵達中部國際機場 (NGO)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Chubu+Centrair+International+Airport" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>搭名鐵 u-sky 到名古屋站 (約28分鐘)</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>16:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 民宿 Check-in</span>
                    <div className={styles.details}>名古屋站西口附近</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>16:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛍️ 名鐵百貨店 本店</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Meitetsu+Department+Store+Nagoya" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      • 本館 B1F 買 LUPICIA 茶葉 🍵<br />
                      • 逛地下街買零食
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>18:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦀 晚餐：名古屋 かに銀 (Kanigin)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Nagoya+Kanigin" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>蟹放題！盡情享受海鮮慶祝第一晚 🎊</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>建議預約</span></div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>20:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍗 宵夜：風來坊 (Furaibo)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Furaibo+Nagoya" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>買手羽先回民宿配啤酒 🍺</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 2 */}
        {view === 'timeline' && activeTab === 'day2' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>🏨 住：名古屋站西口附近民宿</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>08:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦊 豐川稻荷 (Toyokawa Inari)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Toyokawa+Inari" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>參觀千本幟，祈求生意興隆 🏮 (車程約1小時)</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>13:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦍 東山動植物園</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Higashiyama+Zoo+and+Botanical+Gardens" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>看帥哥大猩猩 Shabani，逛逛植物園 🌿</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>18:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🥩 晚餐：馬喰一代 名古屋WEST</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Bakuro+Ichidai+Nagoya+West" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>頂級飛騨牛一頭家 🐄 燒肉/壽喜燒</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>務必預約</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 3 */}
        {view === 'timeline' && activeTab === 'day3' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>🏨 住：名古屋站西口附近民宿</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>09:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🏛️ 明治村 (Meiji Mura)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Museum+Meiji-Mura" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      體驗明治浪漫時光 🚂<br />
                      • 午餐推薦：食道樂可樂餅、牛鍋 🍲
                    </div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>18:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🐍 晚餐：炭燒うな富士 (Unafuji)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Charcoal+Grilled+Unagi+Unafuji" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>超人氣鰻魚飯 🍱 (太閤口店)</div>
                    <div className={styles.tagRow}><span className={styles.tag}>排隊熱門</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 4 */}
        {view === 'timeline' && activeTab === 'day4' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>🏨 住：名古屋站西口附近民宿</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>09:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🐋 名古屋港水族館</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Port+of+Nagoya+Public+Aquarium" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>看虎鯨和海豚表演 🐬</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>13:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 午餐：たから (Takara)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Takara+Osu+Kannon" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>大須觀音附近的味噌鍋燒烏龍麵</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>14:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛍️ 大須商店街 & 古董市</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Osu+Shopping+District" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      • 18號限定：大須觀音古董市 🏺<br />
                      • 三輪神社：尋找兔子神像 🐰<br />
                      • Jungle Nagoya：玩具模型巡禮 🤖
                    </div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>18:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🍣 晚餐：壽司 (選擇中...)</span>
                    <div className={styles.details}>在大須或回名站尋找心水壽司店 🍣</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 5 */}
        {view === 'timeline' && activeTab === 'day5' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>✈️ 回程 (UO685 21:00)</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>11:00</div>
                  <div className={`${styles.card} ${styles.highlight}`}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 岩正手打烏龍 (Iwamasu)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Iwamasu+Teuchi+Udon" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>必吃清單第一位！味噌鍋燒麵完美的句號 😋</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>13:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛍️ 名古屋站周邊最後補貨</span>
                    <div className={styles.details}>高島屋、Bic Camera 最後衝刺</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>16:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 棊子麺茶寮 いしこん (Ishikon)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Ishikon+Nagoya+Station" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>最後衝刺！名古屋特色棊子麵 (Kishimen) 🍜</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>17:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚕 前往機場 (NGO)</span>
                    <div className={styles.details}>領取行李，搭名鐵出發</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>21:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛫 起飛回程</span>
                    <div className={styles.details}>See you Nagoya!</div>
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
              <h3 style={{ marginLeft: '5px' }}>📝 名古屋必做確認</h3>
              <p style={{ marginLeft: '5px', fontSize: '0.8rem', color: '#888', marginBottom: '15px' }}>Checklist for your perfect trip</p>

              {[
                { id: 'ngo-todo-1', main: '預約：かに銀 (Kanigin)', sub: 'Day 1 蟹放題' },
                { id: 'ngo-todo-2', main: '預約：馬喰一代 名古屋WEST', sub: 'Day 2 飛驒牛燒肉' },
                { id: 'ngo-todo-3', main: '確認：岩正手打烏龍 營業時間', sub: 'Day 5 必吃味噌麵' },
                { id: 'ngo-todo-4', main: '預約：u-sky 名鐵特急車票', sub: '往返機場' },
                { id: 'ngo-todo-5', main: 'Visit Japan Web', sub: '入境手續' },
                { id: 'ngo-todo-6', main: '換日元 / 準備信用卡', sub: '古董市可能需現金' },
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104383.05607248163!2d136.8203534884277!3d35.16616422838848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003709e107bdf31%3A0x2961d5331597d9e4!2sNagoya%2C%20Aichi%2C%20Japan!5e0!3m2!1sen!2shk!4v1711234567890!5m2!1sen!2shk"
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
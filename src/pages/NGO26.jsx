import { useState, useEffect } from 'react';
import styles from './NGO26.module.css';
import RateConverter from '../components/RateConverter';

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
                  <div className={styles.timeLabel}>19:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦀 晚餐：名古屋 かに銀 (Kanigin)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Nagoya+Kanigin" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      蟹放題！盡情享受海鮮慶祝第一晚 🎊<br />
                      <span style={{ color: '#E65100', fontWeight: '500', display: 'block', margin: '5px 0' }}>⏳ 限時：90 分鐘</span>
                      <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginTop: '8px', lineHeight: '1.4' }}>
                        🕒 營業時間：<br />
                        • 一：16:00 - 23:30<br />
                        • 二至五：16:00 - 23:00<br />
                        • 六、日及節假日：12:00 - 23:00<br />
                        <span style={{ color: '#888' }}>(L.O. 料理22:00 / 飲品22:30)</span><br />
                        ✨ 全年無休
                      </span>
                    </div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>建議預約</span></div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>20:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍗 宵夜：風來坊 (名駅新幹線口店)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Furaibo+Meieki+Shinkansen-guchi" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      買手羽先回民宿配啤酒 🍺<br />
                      <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginTop: '5px' }}>
                        🕒 營業時間：<br />
                        • 一至四：16:00 - 22:30<br />
                        • 五至日：16:00 - 23:00
                      </span>
                    </div>
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
                  <div className={styles.timeLabel}>10:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>⛩️ 熱田神宮 (Atsuta Jingu)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Atsuta+Jingu" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      森林中的神宮，環境清幽 🙏<br />
                      <span style={{ fontSize: '0.9rem', marginTop: '5px', display: 'block', color: '#666' }}>
                        🍴 <strong>早午餐 (未定)</strong><br />
                        可考慮在神宮內「宮きしめん」吃寬麵 🍜
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>12:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚇 交通轉乘</span>
                    <div className={styles.details}>搭乘地鐵前往東山公園站 🐨</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>13:15</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦍 東山動植物園</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Higashiyama+Zoo+and+Botanical+Gardens" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                        13:15 - 16:30<br/>
                        探訪帥哥大猩猩 Shabani 🦍
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>19:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🥩 晚餐：馬喰一代 名古屋WEST</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Bakuro+Ichidai+Nagoya+West" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      頂級飛騨牛一頭家 🐄 燒肉/壽喜燒<br />
                      <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginTop: '5px' }}>
                        🕒 營業時間：11:30 - 00:00 (每日)
                      </span>
                    </div>
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
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>08:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🚌 名鐵巴士中心 (4樓)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Meitetsu+Bus+Center" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      準備搭乘高速巴士前往明治村<br />
                      <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginTop: '5px' }}>
                        🕒 建議班次 (系統111)：<br />
                        • <strong>08:45</strong> 出發 → 10:15 抵達 (首選)<br />
                        • 09:40 出發 → 11:10 抵達
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>10:15</div>
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
                  <div className={styles.timeLabel}>16:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>👋 明治村閉村 & 準備回程</span>
                    <div className={styles.details}>
                      閉園時間：16:00<br />
                      <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginTop: '5px' }}>
                        🕒 推薦回程巴士 (往名鐵巴士中心)：<br />
                        • <strong>16:28</strong> 開出 (17:50 抵達) - 最適合<br />
                        • 15:28 開出 (16:50 抵達)<br />
                        • 16:58 (冬季加班車 - 18:20 抵達)
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>19:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🐍 晚餐：炭燒うな富士 (名駅太閤口店)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Charcoal+Grilled+Unagi+Unafuji+Meieki+Taikoguchi" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      超人氣鰻魚飯 🍱<br />
                      <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginTop: '5px' }}>
                        🕒 營業時間：11:00 - 22:00 (每日)
                      </span>
                    </div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>建議預約</span></div>
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
                    <div className={styles.details}>
                      大須觀音附近的味噌鍋燒烏龍麵<br />
                      <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginTop: '5px' }}>
                        🕒 營業時間 (日)：11:30 - 14:45 / 17:00 - 19:00
                      </span>
                    </div>
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
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍣 晚餐：大須鮨 (Osu Sushi)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Osu+Sushi+Nagoya" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      在大須體驗在地壽司 🍣<br />
                      <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginTop: '5px' }}>
                        🕒 營業時間 (日)：17:30 - 21:30
                      </span>
                    </div>
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
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🍜 早午餐 (選擇中...)</span>
                    <div className={styles.details}>尋找心水餐廳，為旅程劃下完美句號 😋</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>13:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛍️ 名古屋站周邊最後補貨</span>
                    <div className={styles.details}>高島屋、Bic Camera 最後衝刺，領取行李</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>16:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🚕 出發前往機場 (NGO)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Chubu+Centrair+International+Airport" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>搭乘名鐵 μ-SKY 前往機場</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>17:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍽️ 機場晚餐：4F Sky Town</span>
                    </div>
                    <div className={styles.details}>
                      上機前最後衝刺！機場 4 樓有超多名古屋名店 🍱<br />
                      (矢場丼、雞三和、鰻魚飯等)
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>21:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛫 起飛回程 (UO685)</span>
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

        {/* Tools */}
        {view === 'tools' && (
          <div className={`${styles.daySection} ${styles.active}`} style={{ paddingTop: '20px' }}>
            <RateConverter />
          </div>
        )}

        {/* Map */}
        {view === 'map' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div style={{ margin: '-10px -20px 0', height: '80vh', position: 'relative' }}>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1X_1E8hq9SDRejzJisDuQ7c5HNfUMIXI&ehbc=2E312F"
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
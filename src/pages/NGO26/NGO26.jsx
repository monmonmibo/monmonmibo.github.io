import { useState } from 'react';
import styles from './NGO26.module.css';
import RateConverter from '../../components/RateConverter';

export default function NGO26() {
  const [activeTab, setActiveTab] = useState('day1');
  const [view, setView] = useState('timeline');
  const [todos, setTodos] = useState(() => {
    const loadedTodos = {};
    const todoIds = ['ngo-todo-1', 'ngo-todo-2', 'ngo-todo-3', 'ngo-todo-4', 'ngo-todo-5', 'ngo-todo-6'];
    todoIds.forEach(id => {
      loadedTodos[id] = localStorage.getItem(id) === 'true';
    });
    return loadedTodos;
  });

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
                  <div className={styles.timeLabel}>09:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚇 出發往東山公園</span>
                    <div className={styles.details}>搭東山線直達（約20-25分鐘）🐨</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>10:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦍 東山動植物園</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Higashiyama+Zoo+and+Botanical+Gardens" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                        10:00 - 16:50 (閉園)<br/>
                        探訪帥哥大猩猩 Shabani 🦍<br/>
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>*動物通常 16:00 開始回室內</span>
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
                  <div className={styles.timeLabel}>11:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚇 出發往榮 (Sakae)</span>
                    <div className={styles.details}>搭東山線直達</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>11:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>👞 BIRKENSTOCK 名古屋</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=BIRKENSTOCK+Nagoya+Sakae" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Sakae Place 1F</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>12:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 午餐：山本屋本店 栄本町通店</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Yamamotoya+Honten+Sakae+Hommachi+Nagoya" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>味噌鍋燒烏龍麵 🍲</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>14:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛍️ LOFT (商場)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=LOFT+Sakae+Nagoya" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>逛 LOFT 買雜貨文具</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>15:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>📚 蔦屋書店</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Tsutaya+Books+Sakae+Nagoya" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>睇書 hea 吓</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>19:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🐍 晚餐：炭燒うな富士 (名駅太閤口店)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Charcoal+Grilled+Unagi+Unafuji+Meieki+Taikoguchi" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>超人氣鰻魚飯 🍱</div>
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
                  <div className={styles.timeLabel}>12:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🍔 午餐：水族館內小食店</span>
                    <div className={styles.details}>喺水族館入面醫肚</div>
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
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>18:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍣 晚餐：梅丘壽司の美登利 名古屋店</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Umegaoka+Sushi+no+Midori+Nagoya" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>東京人氣壽司店 🍣</div>
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
                  <div className={styles.timeLabel}>10:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 Check-out & 寄存行李</span>
                    <div className={styles.details}>去名古屋站寄存行李 🧳</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>11:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 午餐：麵家獅子丸</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Menya+Shishimaru+Nagoya" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>最後一餐拉麵！</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>13:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛍️ 名古屋站地下街</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Nagoya+Station+Underground+Mall" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>最後衝刺買手信、零食</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>15:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🧳 取行李</span>
                    <div className={styles.details}>準備搭車去機場</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>16:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🚕 出發前往機場 (NGO)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Chubu+Centrair+International+Airport" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>名鐵 μ-SKY (約28分鐘)</div>
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

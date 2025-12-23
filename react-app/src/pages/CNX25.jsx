import { useState, useEffect } from 'react';
import styles from './CNX25.module.css';

export default function CNX25() {
  const [activeTab, setActiveTab] = useState('day1');
  const [view, setView] = useState('timeline');
  const [todos, setTodos] = useState({});

  useEffect(() => {
    // Load todos
    const loadedTodos = {};
    for (let i = 1; i <= 8; i++) {
      const id = `todo-${i}`;
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

  // Helper to get class names
  const cx = (...classes) => classes.filter(Boolean).map(c => styles[c] || c).join(' ');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Chiang Mai Trip 🇹🇭</h1>
        <p>🌿 慢活・手作・美食 (6 Days)</p>
      </div>

      <div className={styles.stickyNav}>
        <div className={styles.dateTabs}>
          {['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'todo'].map(day => (
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
              <span>🏨 住：Hotel MAYU</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Hotel+MAYU+Chiang+Mai" target="_blank" rel="noreferrer" className={styles.hotelNavBtn}>📍 導航</a>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛬 抵達清邁機場 (CNX)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Chiang+Mai+International+Airport" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Call Grab 直去酒店 (約15分鐘)</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>11:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🧳 Hotel MAYU (寄存行李)</span>
                    <div className={styles.details}>先放低行李，輕鬆去食飯</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>11:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦀 午餐：Mae-Jin (金媽媽)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Mae+Jin+Curry+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>必食：藍蟹肉炒飯、Khao Soi</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.food}`}>The Wall 商場</span></div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>13:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛍️ MAYA Lifestyle Mall</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=MAYA+Lifestyle+Shopping+Center" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>逛街、超市買零食、避暑</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>16:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💆‍♀️ Daydream Sleep Salon</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Daydream+Sleep+Salon+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Head Spa 消除機程疲勞</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>需預約</span> <span className={styles.tag}>The Kannas</span></div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>19:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍽️ 晚餐：One Nimman</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=One+Nimman" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Ginger Farm Kitchen 或市集小食</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>20:45</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚶 步行移動 (約 5 分鐘)</span>
                    <div className={styles.details}>前往 Nimman Soi 5</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>21:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💆 晚間按摩：Vintage Thai</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Vintage+Thai+Massage+Nimman" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>腳底/泰式按摩 (60mins)</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>需預約</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 2 */}
        {view === 'timeline' && activeTab === 'day2' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🏨 住：Hotel MAYU</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Hotel+MAYU+Chiang+Mai" target="_blank" rel="noreferrer" className={styles.hotelNavBtn}>📍 導航</a>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}><span className={styles.itemTitle}>☀️ 自然醒 (Slow Morning)</span></div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>12:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚗 Call Grab 出發</span>
                    <div className={styles.details}>直達餐廳 (約 25 分鐘)</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>13:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🌿 午餐：Khaomao-Khaofang</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Khaomao-Khaofang+Restaurant" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>黑森林餐廳，絕美瀑布景觀必影相！</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>需預約</span></div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>14:45</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚗 Call Grab 去動物園</span>
                    <div className={styles.details}>車程約 5-8 分鐘 (超近)</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>15:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦒 Chiang Mai Night Safari</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Chiang+Mai+Night+Safari" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      • 15:30 Jaguar Trail (步行區)<br />
                      • 18:00 準備 Call Grab 離開
                    </div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>20:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍝 晚餐：Lumi - Italian Restaurant</span>
                      <a href="https://maps.google.com/?cid=14823564611868960102" target="_blank" rel="noreferrer" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>尼曼區優質意大利菜</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>22:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🚗 回酒店休息</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Hotel+MAYU+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>返 Hotel MAYU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 3 */}
        {view === 'timeline' && activeTab === 'day3' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🚚 換酒店：Phra Singh Village</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Phra+Singh+Village+Chiang+Mai" target="_blank" rel="noreferrer" className={styles.hotelNavBtn}>📍 導航</a>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>09:00</div>
                  <div className={styles.card}><span className={styles.itemTitle}>🧳 Check-out MAYU</span>
                    <div className={styles.details}>帶行李去 Phra Singh 寄存</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>10:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🧺 Jing Jai Market (真心市集)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Jing+Jai+Market+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Rustic Market, Good Goods, Live Band</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>12:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🥘 午餐：Jing Jai Market</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Jing+Jai+Market+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      直接在市集內享用美食
                    </div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>14:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🏨 Check-in Phra Singh Village</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Phra+Singh+Village+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>14:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}><span className={styles.itemTitle}>🍰 下午茶：Cake Baan Piemsuk</span></div>
                    <div className={styles.details}>招牌椰子批 (Coconut Pie)</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.food}`}>Grab Food 外賣</span></div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>18:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🏮 Saturday Walking Street</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Wua+Lai+Walking+Street" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>週六夜市 (Wua Lai Road)</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>19:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍽️ 晚餐：Mr. KAI Restaurant</span>
                      <a href="https://maps.google.com/?cid=6867279730715784075" target="_blank" rel="noreferrer" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>古城區人氣泰菜</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>21:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💆 Giving Tree Massage</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Giving+Tree+Massage+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Old City 分店</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>需預約</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 4 */}
        {view === 'timeline' && activeTab === 'day4' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🏨 住：Phra Singh Village</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Phra+Singh+Village+Chiang+Mai" target="_blank" rel="noreferrer" className={styles.hotelNavBtn}>📍 導航</a>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>10:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🎨 Baan Kang Wat (森林藝術村)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Baan+Kang+Wat" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>漫步文青社區、陶瓷、影相</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>14:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍵 The Baristro Asian Style</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=The+Baristro+Asian+Style" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>日系庭院 Cafe (近藝術村)</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>15:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>📒 手作：Dibdee Binder</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Dibdee+Binder" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>訂製手作手帳 (塔佩門新址)</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>19:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍽️ 晚餐：OWL brasserie</span>
                      <a href="https://maps.google.com/?cid=6556187270733801292" target="_blank" rel="noreferrer" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>氛圍很好的西式/Fusion料理</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>20:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🏮 Sunday Walking Street</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Sunday+Walking+Street+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>飯後散步週日夜市</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>21:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💆 Makkha Health & Spa</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Makkha+Health+and+Spa+Ancient+House" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Ancient House 分店 (近酒店)</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>需預約</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 5 */}
        {view === 'timeline' && activeTab === 'day5' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🏨 住：Phra Singh Village</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Phra+Singh+Village+Chiang+Mai" target="_blank" rel="noreferrer" className={styles.hotelNavBtn}>📍 導航</a>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>10:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🧺 Warorot Market & 藤編街</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Warorot+Market" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>買炸豬皮、芒果乾、藤編打卡</div>
                  </div>
                </div>

                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>12:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍫 Chocolate Culture Club</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Chocolate+Culture+Club+Chiang+Mai" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      必飲 Iced Chocolate<br />
                      <span style={{ fontSize: '0.85rem', color: '#888' }}>(太飽了，直接甜品當午餐 😋)</span>
                    </div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>15:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🕊️ 自由活動 / 塔佩門</span>
                      <a href="https://maps.google.com/maps/contrib/107204508007813181434" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>
                      • 執行李<br />
                      • 塔佩門餵白鴿打卡
                    </div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>18:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍽️ 晚餐：Miss Ju</span>
                      <a href="https://maps.google.com/?cid=4826827489626729623" target="_blank" rel="noreferrer" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Farewell Dinner</div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>21:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💆 Makkha Health & Spa</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Makkha+Health+and+Spa+Ancient+House" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>Ancient House 分店 (Farewell Massage)</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>需預約</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 6 */}
        {view === 'timeline' && activeTab === 'day6' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}><span>✈️ 再見清邁</span></div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}><span className={styles.itemTitle}>🏨 Check-out</span></div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>--:--</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🚗 出發去機場 (CNX)</span>
                      <a href="https://www.google.com/maps/search/?api=1&query=Chiang+Mai+International+Airport" className={styles.navIcon}>📍</a>
                    </div>
                    <div className={styles.details}>提早 2.5 小時出發</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>Departure</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛫 起飛回程</span>
                    <div className={styles.details}>See you next time!</div>
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
              <h3 style={{ marginLeft: '5px' }}>📝 出發前確認</h3>
              <p style={{ marginLeft: '5px', fontSize: '0.8rem', color: '#888', marginBottom: '15px' }}>系統會自動儲存你的打勾狀態</p>

              {[
                { id: 'todo-1', main: '預約餐廳：黑森林', sub: 'Day 2 午餐' },
                { id: 'todo-2', main: '預約 Salon (Daydream)', sub: 'Day 1 下午' },
                { id: 'todo-3', main: '按摩：Vintage Thai', sub: 'Day 1' },
                { id: 'todo-4', main: '按摩：Giving Tree', sub: 'Day 3' },
                { id: 'todo-5', main: '按摩：Makkha Ancient', sub: 'Day 4 & 5' },
                { id: 'todo-6', main: '下載交通 App', sub: 'Grab & Bolt' },
                { id: 'todo-7', main: '購買 Sim Card', sub: '或開通漫遊' },
                { id: 'todo-8', main: '兌換泰銖', sub: 'Superrich' },
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
                src="https://www.google.com/maps/d/u/0/embed?mid=1M5apu5JSHqlIXmFKUZhAPUy9w3szNPg&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
              >
              </iframe>
              <div
                style={{
                  position: 'absolute',
                  bottom: '100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255,255,255,0.9)',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  color: '#666',
                  pointerEvents: 'none',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                雙指可縮放地圖
              </div>
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

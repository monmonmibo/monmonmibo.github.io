import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './UKB26.module.css';
import RateConverter from '../../components/RateConverter';

export default function UKB26() {
  const [activeTab, setActiveTab] = useState('day1');
  const [view, setView] = useState('timeline');
  const [todos, setTodos] = useState(() => {
    const loadedTodos = {};
    const todoIds = ['ukb-todo-onion-1', 'ukb-todo-onion-2', 'ukb-todo-glamp', 'ukb-todo-vjw'];
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
        <div className={styles.headerTop}>
          <h1>Kobe & Awaji Trip 🇯🇵</h1>
          <Link to="/" className={styles.homeLink}>🏠 主頁</Link>
        </div>
        <p>🚢 神戶・淡路島 6日5夜深度遊</p>
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
        {/* Day 1: Arrival */}
        {view === 'timeline' && activeTab === 'day1' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🏨 住：神戶三宮 (建議三宮站附近)</span>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>14:00 / 14:15</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚌 高速巴士：機場 → 三宮</span>
                    <div className={styles.details}>
                        在關西機場第 1 航站樓搭乘利木津巴士。<br/>
                        • 14:00 / 14:15 班次：預計 15:05 / 15:20 抵達 <strong>神戶三宮</strong>。
                    </div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>15:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 酒店 Check-in & 休息</span>
                    <div className={styles.details}>先到酒店辦理入註並放下行李，稍作休息回一回電。</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>17:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛍️ 三宮站周邊散策</span>
                    <div className={styles.details}>行下 Mint Kobe、三宮中心街或百貨公司，感受神戶市中心的熱鬧氣氛。</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>晚上</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🥩 晚餐：神戶牛大餐</span>
                    <div className={styles.details}>推薦：Mouriya 或 Steak Land。</div>
                    <div className={styles.tagRow}><span className={`${styles.tag} ${styles.reserved}`}>建議預約</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 2: Rokko Glamping */}
        {view === 'timeline' && activeTab === 'day2' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>⛺ 住：Naturelive Rokko (豪華露營)</span>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>上午</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🍳 三宮悠閒早餐</span>
                    <div className={styles.details}>將大行李寄存在酒店或儲物櫃，輕裝上山（或攜帶必要行李）。</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>13:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚉 三宮 → 六甲道站 → 的士</span>
                    <div className={styles.details}>
                        1. 從 <strong>JR 三宮站</strong> 搭電車往 <strong>JR 六甲道站</strong> (約5分鐘)。<br/>
                        2. 在站前搭乘的士直達露營地 (約20分鐘)。<br/>
                        <span style={{ fontSize: '0.85rem', color: '#C0392B', fontWeight: '800', display: 'block', marginTop: '5px' }}>
                            🔴 重要：下車請領取「的士收據」！
                        </span>
                        <span style={{ fontSize: '0.85rem', color: '#C0392B', fontWeight: '800', display: 'block' }}>
                            🔴 Check-in 時必須出示收據以獲取 2,000 日圓回贈 💰
                        </span>
                        <a href="https://naturelive.co.jp/en/access/" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '8px', display: 'block' }}>🔗 官方交通指引</a>
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>15:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>✨ Naturelive Rokko Check-in</span>
                    <div className={styles.details}>享受奢華露營、手作晚餐，看「千萬美金」夜景 🌃</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 3: Kitano & Shopping */}
        {view === 'timeline' && activeTab === 'day3' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🏨 住：神戶三宮酒店</span>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>11:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚠 退房下山</span>
                    <div className={styles.details}>
                        <strong>方案 A：酒店接駁車 (需預約)</strong><br/>
                        搭乘酒店接駁車往「六甲山上站」，轉乘纜車及巴士回三宮。<br/>
                        <br/>
                        <strong>方案 B：的士直接回三宮酒店 (最輕鬆)</strong><br/>
                        請酒店代叫的士，由露營地直達 <strong>三宮酒店 (待定)</strong> (約 35-45 分鐘)。<br/>
                        <span style={{ fontSize: '0.8rem', color: '#27AE60', fontWeight: '600' }}>✅ 點對點直達：行李直接送達新酒店，放下即開始下午行程。</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>中午</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 到達三宮酒店放置行李</span>
                    <div className={styles.details}>建議先在酒店寄存行李，然後享用神戶著名的「洋食」午餐。</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>下午</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛍️ 三宮商圈深度遊</span>
                    <div className={styles.details}>
                        逛大丸 (DAIMARU) 神戶店、SOGO 或三宮中心街。<br/>
                        這裡集中了各大品牌、服飾及文具，適合悠閒閒逛。
                    </div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>晚上</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🍽️ 繼續品嚐神戶美食</span>
                    <div className={styles.details}>
                        除了洋食，三宮還有許多居酒屋或甜點店。<br/>
                        逛完百貨公司後，找間舒服的餐廳慢慢享受晚餐。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 4: England Hill */}
        {view === 'timeline' && activeTab === 'day4' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🐨 淡路島南下 (即日來回)</span>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>07:40 / 08:40</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚌 三宮出發 (拼最早入場)</span>
                    <div className={styles.details}>
                        搭乘高速巴士往 **洲本巴士中心**。<br/>
                        • 07:40 班次：預計 09:46 抵達農場 (最接近開門時間)<br/>
                        • 08:40 班次：預計 10:46 抵達農場<br/>
                        <div style={{ marginTop: '8px' }}>
                          <a href="https://www.awaji-kotsu.co.jp/_assets/d762e18f435947a5af53e214e409edf2/0c50cf8694ae41b6a85e8b00cb1ddbfe/l_1010-1070_current.pdf" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', display: 'block' }}>🔗 1. 三宮-洲本 高速巴士時刻表</a>
                          <a href="https://www.awaji-kotsu.co.jp/_assets/d762e18f435947a5af53e214e409edf2/aef10707c452426b93836da12d372fba/l_2010_0_current.pdf" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', display: 'block', marginTop: '4px' }}>🔗 2. 洲本-農場 轉乘巴士時刻表</a>
                        </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>07:55 / 09:08</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚌 高速巴士：神姬三宮ＢＴ → 洲本 IC</span>
                    <div className={styles.details}>
                        <strong>1. 上車地點：</strong>神姬三宮ＢＴ (<strong>神姫三宮ＢＴ</strong> - 鐵路高架橋下)。<br/>
                        <strong>2. 落車地點：</strong>在 <strong>洲本 ＩＣ</strong> 落車 (09:08)。<br/>
                        <span style={{ fontSize: '0.8rem', color: '#27AE60', fontWeight: '600' }}>✅ 原站轉乘 (極之方便)：</span><br/>
                        落車位置即為轉乘站，原地等候 <strong>09:30</strong> 往「福良」方向的巴士即可。<br/>
                        <strong>3. 抵達農場：</strong>預計 <strong>09:46</strong> 抵達「イングランドの丘」。
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>17:11 / 17:44</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏠 回程：農場 → 洲本 IC → 三宮</span>
                    <div className={styles.details}>
                        <strong>1. 農場發車：</strong>17:11 搭乘往洲本方向巴士。<br/>
                        <strong>2. 原站轉乘：</strong>17:27 到達 <strong>洲本 ＩＣ</strong>，原地等候 <strong>17:44</strong> 的高速巴士。<br/>
                        <strong>3. 回到神戶：</strong>18:45 抵達 <strong>三宮BT(ミント)</strong>。<br/>
                        <span style={{ fontSize: '0.8rem', color: '#27AE60', fontWeight: '600' }}>✅ 完美對接：無需走路轉站，全家輕鬆即日來回。</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 5: Highway Oasis */}
        {view === 'timeline' && activeTab === 'day5' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>🧅 淡路島洋蔥盛宴 (即日來回)</span>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>09:25</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚌 三宮出發 (神姬總站)</span>
                    <div className={styles.details}>
                        在 <strong>神姫三宮ＢＴ</strong> 上車，享受輕鬆的早晨。<br/>
                        目的地：<strong>淡路 ＩＣ</strong> (10:02 抵達)。
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>10:15 - 13:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛍️ Highway Oasis：買物與午餐</span>
                    <div className={styles.details}>
                        <strong>食：</strong>推薦「みけ家」淡路牛或海鮮丼。<br/>
                        <strong>買：</strong>洋蔥湯粉、黑蒜咖哩、真洋蔥大掃貨！🧅<br/>
                        欣賞完大橋美景後，準備前往下一站。
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>12:59 / 14:49</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>⛪ 轉乘：淡路夢舞台</span>
                    <div className={styles.details}>
                        在 Highway Oasis 的 <strong>A1 停車場</strong> 搭乘「反時計」方向巴士。<br/>
                        • 12:59 班次：13:41 抵達夢舞台<br/>
                        • 14:49 班次：15:31 抵達夢舞台<br/>
                        <span style={{ fontSize: '0.8rem', color: '#E65100', fontWeight: '600' }}>⚠️ 班次較疏，請務必看準時間上車。</span><br/>
                        <a href="https://www.honshi-bus.co.jp/local/view/11" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '4px', display: 'block' }}>🔗 北部周遊巴士 (Route 10) 詳情</a>
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>18:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🍽️ 晚餐：夢舞台展望臺餐廳</span>
                    <div className={styles.details}>
                        就在百段苑旁的大樓內，有多間優質餐廳：<br/>
                        • <strong>2F KITORA：</strong>新鮮海鮮、壽司 🍣<br/>
                        • <strong>1F YUME TERRACE：</strong>優質淡路牛料理 🥩<br/>
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>*營業至 21:00，吃飽後走幾步即達巴士站。</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>19:15 / 20:15</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚌 夢舞台晚間回神戶</span>
                    <div className={styles.details}>
                        在「淡路夢舞台前」站搭乘高速巴士。<br/>
                        <span style={{ fontSize: '0.8rem', color: '#27AE60', fontWeight: '600' }}>✅ 吃飽就走：建議搭乘 20:15 班次，21:02 即可回到三宮。</span><br/>
                        • 回程班次：19:15 或 20:15
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Day 6: Final Day */}
        {view === 'timeline' && activeTab === 'day6' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div className={styles.hotelHeader}>
              <span>✈️ 歸途 (Departure 17:10)</span>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>11:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 Check-out & 午餐</span>
                    <div className={styles.details}>
                        辦理退房並將行李寄存在酒店。<br/>
                        在三宮商圈享用最後一頓午餐（推薦試試神戶沾麵或明石燒）。
                    </div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>13:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>💼 取回行李 & 往巴士站</span>
                    <div className={styles.details}>回到酒店提取行李，步行前往三宮高速巴士站。</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>13:40</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚌 高速巴士：三宮 → 關西機場</span>
                    <div className={styles.details}>
                        搭乘 13:40 的利木津巴士。<br/>
                        <strong>14:45</strong> 抵達關西機場第 1 航站樓，準備登機。
                    </div>
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
              <h3 style={{ marginLeft: '5px' }}>📝 必買 & 準備清單</h3>
              {[
                { id: 'ukb-todo-onion-1', main: '洋蔥湯粉 / 沙拉醬', sub: 'Highway Oasis 貨最齊' },
                { id: 'ukb-todo-onion-2', main: '黑蒜洋蔥咖哩', sub: '淡路島限定美味' },
                { id: 'ukb-todo-glamp', main: 'Naturelive Rokko 預約', sub: '確認晚餐選擇' },
                { id: 'ukb-todo-vjw', main: 'Visit Japan Web', sub: '入境登記' },
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
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <p>🗺️ 神戶 & 淡路島地圖</p>
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

import { useState } from 'react';
import styles from './DAN26.module.css';
import VndToHkdConverter from '../../components/VndToHkdConverter';

export default function DAN26() {
  const [activeTab, setActiveTab] = useState('day1');
  const [view, setView] = useState('timeline');

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

  const hotelName = 'CENTRE POINT Danang Hotel & Residence';
  const hotelQuery = 'CENTRE+POINT+Danang+Hotel+%26+Residence';
  const renderHotelHeader = () => (
    <div className={styles.hotelHeader}>
      <span>🏨 住：{hotelName}</span>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${hotelQuery}`}
        target="_blank"
        rel="noreferrer"
        className={styles.hotelNavBtn}
      >
        📍 導航
      </a>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Da Nang Trip 🇻🇳</h1>
        <p>🏖️ 峴港 5日4夜</p>
      </div>

      <div className={styles.stickyNav}>
        <div className={styles.dateTabs}>
          {['day1', 'day2', 'day3', 'day4', 'day5', 'todo'].map((day) => (
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
        {view === 'timeline' && activeTab === 'day1' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>08:25</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>✈️ 出發：峴港國際機場</span>
                    <div className={styles.details}>08:25 起飛</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>09:20</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛬 抵達：峴港國際機場</span>
                    <div className={styles.details}>09:20 落機，之後前往酒店</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>09:45</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💱 機場唱錢</span>
                    </div>
                    <div className={styles.details}>喺機場唱少少錢，方便即日開支</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>11:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 Check-in / 放行李</span>
                    <div className={styles.details}>CENTRE POINT Danang Hotel & Residence</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>12:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🛍️ 漢市場 (Han Market)</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Han+Market+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>行街買手信，順便唱錢</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>13:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 午餐：越南河粉</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Vietnamese+pho+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>漢市場附近食午餐</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>16:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💆 頭療：Cassia Spa</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Cassia+Spa+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>90mins</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>18:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 越南菜</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Vietnamese+restaurant+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>頭療完再去食越南菜</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'timeline' && activeTab === 'day2' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>😴 訓到自然醒</span>
                    <div className={styles.details}>慢慢嘆個 morning，唔使趕行程</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>13:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 午餐：越南菜</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Vietnamese+restaurant+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>Day 2 午餐食越南菜</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>14:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 回酒店休息</span>
                    <div className={styles.details}>午餐後休息下，或者返酒店抖一抖</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>16:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💆 按摩</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=massage+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>食飽休息後去按摩放鬆</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>8:30PM</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍷 晚餐：Le Comptoir Danang</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Le+Comptoir+Danang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>Apr 17, 2026 • Booked • 3 小時慢慢食</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>11:00PM</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 食完返酒店</span>
                    <div className={styles.details}>慢慢返酒店休息</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'timeline' && activeTab === 'day3' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>11:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>😴 訓醒先出發</span>
                    <div className={styles.details}>慢慢早餐、整理好先出門</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>12:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚕 出發去會安舊城</span>
                    <div className={styles.details}>由峴港去會安，車程約 45 - 60 分鐘</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>13:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🏮 會安舊城漫步</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Hoi+An+Ancient+Town"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>沿河邊、古屋、黃牆打卡影相</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>14:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 午餐：會安特色料理</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Hoi+An+restaurant"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>食會安小食 / 越南菜，慢慢食</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>15:30</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>☕ Cafe / 休息</span>
                    <div className={styles.details}>揾間河邊 cafe 坐一陣，避暑抖下</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>16:45</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦶 腳底按摩</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=foot+massage+Hoi+An"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>晚餐前放鬆一下對隻腳</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>17:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🏮 黃昏燈籠時段</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Hoi+An+Ancient+Town"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>等天黑啲睇燈籠，影夜景</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>19:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍽️ 晚餐：會安舊城</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Hoi+An+Ancient+Town+restaurant"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>簡單食完再慢慢行多陣</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>21:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🚕 返峴港酒店</span>
                    <div className={styles.details}>玩夠就返酒店休息</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'timeline' && activeTab === 'day4' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>Morning</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>😴 訓醒先出發</span>
                    <div className={styles.details}>Day 4 慢慢來，唔使趕</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>12:30</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 午餐</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=lunch+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>先食個舒服午餐，再開始下午行程</div>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timeLabel}>14:00</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🏨 返酒店休息</span>
                    <div className={styles.details}>午餐後返酒店抖一抖</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>16:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>👐 四手按摩</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=four+hands+massage+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>用一個重點活動放鬆成日</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>19:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🦞 晚餐：海鮮餐</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=dinner+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>食海鮮餐，之後返酒店休息</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'timeline' && activeTab === 'day5' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>18:10</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>✈️ 回程：峴港國際機場</span>
                    <div className={styles.details}>18:10 起飛</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>21:10</div>
                  <div className={styles.card}>
                    <span className={styles.itemTitle}>🛬 抵達香港</span>
                    <div className={styles.details}>21:10 落機</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'timeline' && activeTab === 'tools' && (
          <div className={`${styles.daySection} ${styles.active}`} style={{ paddingTop: '20px' }}>
            <VndToHkdConverter />
          </div>
        )}

        {view === 'timeline' && activeTab === 'todo' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
          </div>
        )}

        {view === 'tools' && (
          <div className={`${styles.daySection} ${styles.active}`} style={{ paddingTop: '20px' }}>
            <VndToHkdConverter />
          </div>
        )}

        {view === 'map' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            <div style={{ margin: '-10px -20px 0', height: '80vh', position: 'relative' }}>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1lC7uEBUlRov8ZrGESr2BwrxPkBP4xHg&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Da Nang Map"
              />
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

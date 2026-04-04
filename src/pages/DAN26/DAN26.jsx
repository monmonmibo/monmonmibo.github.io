import { useState } from 'react';
import styles from './DAN26.module.css';

export default function DAN26() {
  const [activeTab, setActiveTab] = useState('day1');
  const [view, setView] = useState('timeline');

  const handleTabClick = (day) => {
    setActiveTab(day);
    setView('timeline');
    window.scrollTo(0, 0);
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
                  <div className={styles.timeLabel}>11:00</div>
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
                  <div className={styles.timeLabel}>14:00</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>🍜 越南河粉</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Vietnamese+pho+Da+Nang"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        📍
                      </a>
                    </div>
                    <div className={styles.details}>跟住去食正宗越南河粉</div>
                  </div>
                </div>
                <div className={`${styles.timelineItem} ${styles.highlight}`}>
                  <div className={styles.timeLabel}>4:30PM</div>
                  <div className={styles.card}>
                    <div className={styles.titleRow}>
                      <span className={styles.itemTitle}>💆 頭療：Cassia Spa</span>
                      <a
                        href="https://www.cassiaspa.vn/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navIcon}
                      >
                        🌐
                      </a>
                    </div>
                    <div className={styles.details}>90mins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'timeline' && activeTab === 'day2' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
          </div>
        )}

        {view === 'timeline' && activeTab === 'day3' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
          </div>
        )}

        {view === 'timeline' && activeTab === 'day4' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
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

        {view === 'timeline' && activeTab === 'todo' && (
          <div className={`${styles.daySection} ${styles.active}`}>
            {renderHotelHeader()}
          </div>
        )}
      </div>
    </div>
  );
}

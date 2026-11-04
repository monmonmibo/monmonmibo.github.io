import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon, SuitcaseIcon } from '../../components/Icons';
import styles from './Home.module.css';

const trips = [
  {
    to: '/cnx26',
    code: 'CNX 26',
    destination: '清邁',
    country: '泰國',
    date: '2026.11 — 12',
    duration: '6日5夜',
    highlights: '2026 冬季清邁 · 詳細行程待編排',
    status: '即將出發',
    featured: true,
  },
  {
    to: '/ukb26',
    code: 'UKB 26',
    destination: '神戶・淡路島',
    country: '日本',
    date: '2026.10 — 11',
    duration: '6日5夜',
    highlights: '六甲山露營 · 有馬溫泉 · 淡路島',
    status: '旅程完成',
  },
  {
    to: '/tak26',
    code: 'TAK 26',
    destination: '高松・小豆島',
    country: '日本',
    date: '2026.09',
    duration: '5日4夜',
    highlights: '兒島牛仔 · 小豆島 · 高松市集',
    status: '旅程完成',
  },
  {
    to: '/danang26',
    code: 'DAN 26',
    destination: '峴港・會安',
    country: '越南',
    date: '2026.04',
    duration: '5日4夜',
    highlights: '會安古城 · 海岸 · 越南料理',
    status: '旅程完成',
  },
  {
    to: '/ngo26',
    code: 'NGO 26',
    destination: '名古屋',
    country: '日本',
    date: '2026.01',
    duration: '5日4夜',
    highlights: '蟹料理 · 港水族館 · 大須商店街',
    status: '旅程完成',
  },
  {
    to: '/cnx25',
    code: 'CNX 25',
    destination: '清邁',
    country: '泰國',
    date: '2025.12',
    duration: '6日5夜',
    highlights: '慢活 · 手作藝術村 · 夜間動物園',
    status: '旅程完成',
  },
];

export default function Home() {
  const [country, setCountry] = useState('全部');
  const upcoming = trips.find(trip => trip.featured);
  const archived = trips.filter(trip => !trip.featured);

  const visibleTrips = archived.filter(trip => country === '全部' || trip.country === country);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}><SuitcaseIcon size={25} /><span>MonMonMibo<small>旅程，隨身帶住。</small></span></Link>
        <span className={styles.tripCount}>{trips.length} 個旅程</span>
      </header>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>我的旅程</h1>
          <p>計劃下一趟，亦留住去過嘅地方。</p>
        </div>
        {upcoming && (
          <section className={styles.upcoming} aria-labelledby="next-trip">
            <div className={styles.sectionHeading}><h2 id="next-trip">下一趟旅程</h2><span>即將出發</span></div>
            <Link to={upcoming.to} className={styles.featuredCard}>
              <div className={styles.featuredBody}>
              <div className={styles.featuredTop}><span className={styles.statusTag}>{upcoming.country} · {upcoming.duration}</span></div>
              <h3>{upcoming.destination}</h3>
              <p className={styles.featuredDate}><CalendarIcon size={17} />{upcoming.date}</p>
              <p className={styles.highlights}>{upcoming.highlights}</p>
              <div className={styles.featuredFooter}><span>查看行程</span><ArrowRightIcon size={20} /></div>
              </div>
            </Link>
          </section>
        )}
        <section aria-labelledby="past-trips">
          <div className={styles.sectionHeading}><h2 id="past-trips">過往旅程</h2><span>{country === '全部' ? `${archived.length} 個旅程` : `${visibleTrips.length} / ${archived.length} 個旅程`}</span></div>
          <div className={styles.filters} role="group" aria-label="按國家篩選過往旅程">
            {['全部', ...new Set(archived.map(trip => trip.country))].map(option => (
              <button className={styles.filterButton} key={option} type="button" aria-pressed={country === option} onClick={() => setCountry(option)}>{option}</button>
            ))}
          </div>
          <div className={styles.tripGrid} aria-live="polite">
            {visibleTrips.map(trip => (
              <Link key={trip.to} to={trip.to} className={styles.tripCard} aria-label={`開啟${trip.destination}行程`}>
                <div className={styles.tripInfo}><span className={styles.country}>{trip.country}</span><h3>{trip.destination}</h3><p>{trip.date} · {trip.duration}</p></div>
                <span className={styles.cardAction} aria-hidden="true"><ArrowRightIcon size={18} /></span>
              </Link>
            ))}
          </div>
        </section>
        <aside className={styles.helper}><span aria-hidden="true">↗</span><p>出發前打開行程，預先載入資料，旅途中亦可離線查看。</p></aside>
      </main>
      <footer className={styles.footer}>
        <span>MonMonMibo · 每一趟，都好好出發。</span>
      </footer>
    </div>
  );
}

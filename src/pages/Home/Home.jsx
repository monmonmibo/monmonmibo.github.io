import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon, SuitcaseIcon } from '../../components/Icons';
import { cnx26Data } from '../CNX26/cnx26Data';
import styles from './Home.module.css';

const trips = [
  {
    to: '/cnx26',
    code: 'CNX 26',
    destination: '清邁',
    country: '泰國',
    startDate: cnx26Data.days[0].date,
    endDate: cnx26Data.days.at(-1).date,
    duration: '6日5夜',
    highlights: '寧曼逛街 · 按摩放鬆 · 蒙占山包車',
  },
  {
    to: '/ukb26',
    code: 'UKB 26',
    destination: '神戶・淡路島',
    country: '日本',
    date: '2026.10 — 11',
    duration: '6日5夜',
    highlights: '六甲山露營 · 有馬溫泉 · 淡路島',
    status: '已完成',
  },
  {
    to: '/tak26',
    code: 'TAK 26',
    destination: '高松・小豆島',
    country: '日本',
    date: '2026.09',
    duration: '5日4夜',
    highlights: '兒島牛仔 · 小豆島 · 高松市集',
    status: '已完成',
  },
  {
    to: '/danang26',
    code: 'DAN 26',
    destination: '峴港・會安',
    country: '越南',
    date: '2026.04',
    duration: '5日4夜',
    highlights: '會安古城 · 海岸 · 越南料理',
    status: '已完成',
  },
  {
    to: '/ngo26',
    code: 'NGO 26',
    destination: '名古屋',
    country: '日本',
    date: '2026.01',
    duration: '5日4夜',
    highlights: '蟹料理 · 港水族館 · 大須商店街',
    status: '已完成',
  },
  {
    to: '/cnx25',
    code: 'CNX 25',
    destination: '清邁',
    country: '泰國',
    date: '2025.12',
    duration: '6日5夜',
    highlights: '慢活 · 手作藝術村 · 夜間動物園',
    status: '已完成',
  },
];

const hongKongDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Hong_Kong',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function todayInHongKong(now = new Date()) {
  const parts = hongKongDate.formatToParts(now);
  const value = type => parts.find(part => part.type === type).value;
  return `${value('year')}-${value('month')}-${value('day')}`;
}

function getTripStatus(trip, today) {
  if (!trip.startDate || !trip.endDate) return trip.status;
  if (today < trip.startDate) return '即將出發';
  if (today <= trip.endDate) return '旅程進行中';
  return '已完成';
}

function tripDateLabel(trip) {
  if (!trip.startDate || !trip.endDate) return trip.date;

  const [startYear, startMonth, startDay] = trip.startDate.split('-').map(Number);
  const [endYear, endMonth, endDay] = trip.endDate.split('-').map(Number);
  const start = `${startYear} 年 ${startMonth} 月 ${startDay} 日`;
  if (trip.startDate === trip.endDate) return start;

  const end = `${endMonth} 月 ${endDay} 日`;
  return `${start}至 ${startYear === endYear ? end : `${endYear} 年 ${end}`}`;
}

export default function Home() {
  const [country, setCountry] = useState('全部');
  const [today, setToday] = useState(todayInHongKong);

  useEffect(() => {
    let timer;
    const refreshDate = () => {
      clearTimeout(timer);
      const now = new Date();
      const date = todayInHongKong(now);
      setToday(date);
      const midnight = Date.parse(`${date}T00:00:00+08:00`) + 86_400_000;
      timer = setTimeout(refreshDate, midnight - now.getTime());
    };

    refreshDate();
    document.addEventListener('visibilitychange', refreshDate);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', refreshDate);
    };
  }, []);

  const tripsWithStatus = trips.map(trip => ({ ...trip, status: getTripStatus(trip, today) }));
  const currentTrips = tripsWithStatus
    .filter(trip => trip.status !== '已完成')
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  const nextTrip = currentTrips.find(trip => trip.status === '即將出發');
  const archived = tripsWithStatus.filter(trip => trip.status === '已完成');

  const visibleTrips = archived.filter(trip => country === '全部' || trip.country === country);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}><SuitcaseIcon size={25} /><span>MonMonMibo</span></Link>
      </header>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>我的旅程</h1>
        {currentTrips.map(trip => (
          <section className={styles.upcoming} key={trip.code} aria-labelledby={`trip-${trip.to.slice(1)}`}>
            <Link to={trip.to} className={styles.featuredCard}>
              <div className={styles.featuredBody}>
                <h2 id={`trip-${trip.to.slice(1)}`} className={styles.featuredLabel}>
                  {trip === nextTrip ? '下一趟旅程 · 即將出發' : trip.status}
                </h2>
                <p className={styles.destination}>{trip.destination}</p>
                <p className={styles.featuredDate}><CalendarIcon size={17} />{tripDateLabel(trip)}</p>
                <p className={styles.featuredMeta}>{trip.country} · {trip.duration}</p>
                <p className={styles.highlights}>{trip.highlights}</p>
                <span className={styles.featuredFooter}>查看行程<ArrowRightIcon size={20} /></span>
              </div>
            </Link>
          </section>
        ))}
        <section aria-labelledby="past-trips">
          <div className={styles.sectionHeading}><h2 id="past-trips">過往旅程</h2><span>{country === '全部' ? `${archived.length} 個旅程` : `${visibleTrips.length} / ${archived.length} 個旅程`}</span></div>
          <div className={styles.filters} role="group" aria-label="按國家篩選過往旅程">
            {['全部', ...new Set(archived.map(trip => trip.country))].map(option => (
              <button className={styles.filterButton} key={option} type="button" aria-pressed={country === option} onClick={() => setCountry(option)}>{option}</button>
            ))}
          </div>
          <div className={styles.tripGrid} aria-live="polite">
            {visibleTrips.map(trip => (
              <Link key={trip.to} to={trip.to} className={styles.tripCard} aria-label={`開啟${trip.destination}行程，${tripDateLabel(trip)}`}>
                <div className={styles.tripInfo}>
                  <h3>{trip.destination}</h3>
                  <p>{trip.country} · {tripDateLabel(trip)} · {trip.duration}</p>
                </div>
                <span className={styles.cardAction} aria-hidden="true"><ArrowRightIcon size={18} /></span>
              </Link>
            ))}
          </div>
        </section>
        <aside className={styles.helper}><span aria-hidden="true">↗</span><p>出發前用網絡開一次行程，之後冇網絡都可以睇返已載入嘅資料。</p></aside>
      </main>
      <footer className={styles.footer}>
        <span>MonMonMibo</span>
      </footer>
    </div>
  );
}

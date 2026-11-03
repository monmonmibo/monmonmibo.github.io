import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/Icons';
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
  const pageRef = useRef(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const elements = root.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(styles.inView);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroGrain} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>MONMONMIBO</p>
          <h1 className={styles.title}>我的行程</h1>
          <p className={styles.subtitle}>下一站：清邁 · 2026年11–12月</p>
        </div>
        <dl className={styles.stats} aria-label="旅程摘要">
          <div>
            <dt>旅程</dt>
            <dd>{String(trips.length).padStart(2, '0')}</dd>
          </div>
          <div>
            <dt>目的地</dt>
            <dd>03</dd>
          </div>
          <div>
            <dt>下一站</dt>
            <dd>CNX</dd>
          </div>
        </dl>
      </header>

      <main className={styles.main}>
        <div className={styles.sectionHeading} data-reveal>
          <div>
            <p className={styles.sectionEyebrow}>JOURNEYS</p>
            <h2>旅程收藏</h2>
          </div>
          <p>由即將啟程，到已成回憶。</p>
        </div>

        <div className={styles.tripGrid} aria-label="行程列表">
          {trips.map((trip, index) => (
            <Link
              key={trip.to}
              to={trip.to}
              data-reveal
              className={`${styles.tripCard} ${trip.featured ? styles.tripCardFeatured : ''}`}
              aria-label={`開啟${trip.destination}${trip.duration}行程`}
            >
              <div className={styles.cardTopline}>
                <span className={styles.tripIndex}>{String(index + 1).padStart(2, '0')}</span>
                <span className={`${styles.statusTag} ${trip.featured ? styles.statusUpcoming : styles.statusDone}`}>
                  {trip.status}
                </span>
              </div>

              <div className={styles.tripInfo}>
                <p className={styles.tripCode}>{trip.code} · {trip.country}</p>
                <h3>{trip.destination}</h3>
                <p className={styles.highlights}>{trip.highlights}</p>
              </div>

              <div className={styles.cardFooter}>
                <p>
                  <span>{trip.date}</span>
                  <span>{trip.duration}</span>
                </p>
                <span className={styles.cardAction} aria-hidden="true">
                  <ArrowRightIcon size={19} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <span>MonMonMibo</span>
        <span>Private journeys, carefully kept.</span>
      </footer>
    </div>
  );
}

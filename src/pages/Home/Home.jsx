import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>My Travels 🌍</h1>
        <p className={styles.subtitle}>行程總覽 Dashboard</p>

            <Link to="/ukb26" className={styles.tripCard}>
                <div className={styles.tripInfo}>
                    <h2>
                        神戶淡路島6日5夜 🇯🇵
                        <span className={`${styles.statusTag} ${styles.statusUpcoming}`}>Upcoming</span>
                    </h2>
                    <span className={styles.dateText}>2026 Nov • ⚓ 港口・🐄 和牛・🎡 淡路島</span>
                </div>
            </Link>

            <Link to="/tak26" className={styles.tripCard}>
                <div className={styles.tripInfo}>
                    <h2>
                        高松5日4夜 🇯🇵
                        <span className={`${styles.statusTag} ${styles.statusUpcoming}`}>Upcoming</span>
                    </h2>
                    <span className={styles.dateText}>2026 Sep • ⛰️ 栗林公園・🍜 烏冬・🏝️ 小豆島</span>
                </div>
            </Link>

            <Link to="/danang26" className={`${styles.tripCard} ${styles.tripCardFinished}`}>
                <div className={styles.tripInfo}>
                    <h2>
                        峴港5日4夜 🇻🇳
                        <span className={`${styles.statusTag} ${styles.statusDone}`}>Finished</span>
                    </h2>
                    <span className={styles.dateText}>2026 Apr • CENTRE POINT Danang Hotel & Residence</span>
                </div>
            </Link>


            <Link to="/ngo26" className={`${styles.tripCard} ${styles.tripCardFinished}`}>
                <div className={styles.tripInfo}>
                    <h2>
                        名古屋5日4夜 🇯🇵
                        <span className={`${styles.statusTag} ${styles.statusDone}`}>Finished</span>
                    </h2>
                    <span className={styles.dateText}>2026 Jan • 市中心</span>
                </div>
            </Link>

            <Link to="/cnx25" className={`${styles.tripCard} ${styles.tripCardFinished}`}>
                <div className={styles.tripInfo}>
                    <h2>
                        清邁6日5夜 🇹🇭
                        <span className={`${styles.statusTag} ${styles.statusDone}`}>Finished</span>
                    </h2>
                    <span className={styles.dateText}>2025 Dec • 慢活・手作・美食</span>
                </div>
            </Link>

            <div className={styles.footer}>
                Built for my own adventures
            </div>
        </div>
    );
}

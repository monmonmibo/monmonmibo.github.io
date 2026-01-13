import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Travels 🌍</h1>
            <p className={styles.subtitle}>行程總覽 Dashboard</p>



            <Link to="/ngo26" className={styles.tripCard} style={{ opacity: 0.7 }}>
                <div className={styles.tripInfo}>
                    <h2>
                        名古屋5月4夜 🇯🇵
                        <span className={`${styles.statusTag} ${styles.statusPlan}`}>Planning</span>
                    </h2>
                    <span className={styles.dateText}>2026 Jan • 市中心</span>
                </div>
            </Link>

            <Link to="/cnx25" className={styles.tripCard} style={{ opacity: 0.5 }}>
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
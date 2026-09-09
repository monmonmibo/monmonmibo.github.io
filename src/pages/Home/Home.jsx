import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.pageHeader}>
                <h1 className={styles.title}>My Travels 🌍</h1>
                <p className={styles.subtitle}>行程總覽 Dashboard</p>
            </header>

            <main className={styles.tripList} aria-label="行程列表">

            <Link to="/ukb26" className={styles.tripCard}>
                <div className={styles.tripInfo}>
                    <h2>
                        神戶淡路島6日5夜 🇯🇵
                        <span className={`${styles.statusTag} ${styles.statusUpcoming}`}>Upcoming</span>
                    </h2>
                    <span className={styles.dateText}>2026 Oct-Nov • ⛺ 六甲山露營・♨️ 有馬溫泉・🧅 淡路島洋蔥</span>
                </div>
            </Link>

            <Link to="/tak26" className={`${styles.tripCard} ${styles.tripCardFinished}`}>
                <div className={styles.tripInfo}>
                    <h2>
                        高松5日4夜 🇯🇵
                        <span className={`${styles.statusTag} ${styles.statusDone}`}>Finished</span>
                    </h2>
                    <span className={styles.dateText}>2026 Sep • 👖 兒島牛仔・🏝️ 小豆島・⚡ Pokémon Center</span>
                </div>
            </Link>

            <Link to="/danang26" className={`${styles.tripCard} ${styles.tripCardFinished}`}>
                <div className={styles.tripInfo}>
                    <h2>
                        峴港5日4夜 🇻🇳
                        <span className={`${styles.statusTag} ${styles.statusDone}`}>Finished</span>
                    </h2>
                    <span className={styles.dateText}>2026 Apr • 🏮 會安古城・💆 按摩・🦞 海鮮</span>
                </div>
            </Link>


            <Link to="/ngo26" className={`${styles.tripCard} ${styles.tripCardFinished}`}>
                <div className={styles.tripInfo}>
                    <h2>
                        名古屋5日4夜 🇯🇵
                        <span className={`${styles.statusTag} ${styles.statusDone}`}>Finished</span>
                    </h2>
                    <span className={styles.dateText}>2026 Jan • 🦀 蟹料理・🐋 名古屋港水族館・🛍️ 大須商店街</span>
                </div>
            </Link>

            <Link to="/cnx25" className={`${styles.tripCard} ${styles.tripCardFinished}`}>
                <div className={styles.tripInfo}>
                    <h2>
                        清邁6日5夜 🇹🇭
                        <span className={`${styles.statusTag} ${styles.statusDone}`}>Finished</span>
                    </h2>
                    <span className={styles.dateText}>2025 Dec • 🌿 慢活・🖌️ 手作藝術村・🦁 Night Safari</span>
                </div>
            </Link>

            </main>

            <footer className={styles.footer}>
                Built for my own adventures
            </footer>
        </div>
    );
}

import { FaHome, FaBookmark, FaSearch } from "react-icons/fa";
import styles from './header.module.css';

export default function Nav({ router }) {
    return (
        <nav className={styles.main}>
            <div className={styles.logo}>
                <h1>Pocket<span>Planet</span></h1>
            </div>
            <ul className={styles.nav}>
                <li className={router === '/' || router === '/home' ? styles.active : ''}>
                    <a href="/">
                        <FaHome />
                        <p>首頁</p>
                    </a>
                </li>
                <li className={router === '/online_data' && styles.active}>
                    <a href="/online_data">
                        <FaSearch />
                        <p>即時數據</p>
                    </a>
                </li>
                <li className={router === '/about' && styles.active}>
                    <a href="/about">
                        <FaBookmark />
                        <p>關於</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
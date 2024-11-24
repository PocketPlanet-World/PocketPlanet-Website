import { useState, useEffect } from "react";
import { FaDatabase, FaCloud } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";
import styles from './home.module.css';

export default function Home() {

    const [dataCount, setDataCount] = useState(0);

    useEffect(() => {
        const target = 15001;
        const duration = 1000;
        const steps = 50;
        const increment = Math.ceil(target / steps);
        const intervalTime = duration / steps;

        const interval = setInterval(() => {
            setDataCount(prevCount => {
                if (prevCount >= target) {
                    clearInterval(interval);
                    return target;
                }
                return prevCount + increment;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.view}>
                <div className={styles.card}>
                    <h1>PocketPlanet</h1>
                    <p>
                        基於數據分析，<br />
                        並以雲端顯示數據為主的專題網站。
                    </p>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.data}>
                    <ul>
                        <li className={styles.blue}>
                            {dataCount > 15000 ? "數據 15000+" : `數據 ${dataCount}`}
                            <FaDatabase />
                        </li>
                        <li className={styles.orange}>
                            雲端服務
                            <FaCloud />
                        </li>
                        <li className={styles.red}>
                            即時數據及監控
                            <RiRadioButtonLine />
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
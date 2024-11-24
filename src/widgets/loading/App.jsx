import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.main}>
            <h3>資料獲取中</h3>
            <div className={styles.loader}>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}
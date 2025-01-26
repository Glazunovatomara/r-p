import styles from './card.module.css'

const Card = () => {
    return(
        <div className={styles.card}>
            <div className={styles.word_section}>
                <h2 className={styles.subtitle}>слово</h2>
                <p className={styles.transcription}>транскрипция</p>
            </div>
            <button className={styles.btn}>Проверить</button>
            <p className={styles.translation}>перевод</p>    
        </div>
    )
}
export default Card
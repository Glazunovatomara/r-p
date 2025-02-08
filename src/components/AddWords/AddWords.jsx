import styles from "./addWords.module.css"

const AddWords = () => {
    return (
        <div className={styles.input_arrea}>
            <input type="text" className={styles.input} placeholder="новое слово"/>
            <input type="text" className={styles.input} placeholder="транскрипция"/>
            <input type="text" className={styles.input} placeholder="перевод"/>
        </div>
    )
}

export default AddWords
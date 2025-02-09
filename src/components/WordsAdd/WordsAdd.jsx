import styles from "./WordsAdd.module.css"

const AddWords = () => {
    return (
        <div className={styles.input_arrea}>
            <input type="text" className={styles.input} placeholder="новое слово"/>
            <input type="text" className={styles.input} placeholder="транскрипция"/>
            <input type="text" className={styles.input} placeholder="перевод"/>
            <button>Добавить</button>
        </div>
    )
}

export default AddWords
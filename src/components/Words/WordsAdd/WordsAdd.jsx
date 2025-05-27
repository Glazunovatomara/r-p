import styles from "./WordsAdd.module.css"

const AddWords = () => {
    const addWord = () => {
        console.log('add')
        const englishValue = document.getElementById('englishInput').value;
        const transcriptionValue = document.getElementById('transcriptionInput').value;
        const russianValue = document.getElementById('russianInput').value;
        const tagsValue = document.getElementById('tagInput').value;

        console.log(englishValue,transcriptionValue,russianValue,tagsValue)
    }
    return (
        <div className={styles.input_arrea}>
            <input type="text" className={styles.input} id="englishInput" placeholder="новое слово"/>
            <input type="text" className={styles.input} id="transcriptionInput" placeholder="транскрипция"/>
            <input type="text" className={styles.input} id="russianInput" placeholder="перевод"/>
            <input type="text" className={styles.input} id="tagInput" placeholder="тег"/>
            <button onClick={addWord}>Добавить</button>
        </div>
    )
}

export default AddWords
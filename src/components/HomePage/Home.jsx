import styles from './home.module.css'

const Home = () => {

    return(
        <div className={styles.home}>
            <button className={styles.btn}>Создать список</button>
            <button className={styles.btn}>Списки</button>
            <button className={styles.btn}>Словарь</button>
        </div>
    )

}

export default Home
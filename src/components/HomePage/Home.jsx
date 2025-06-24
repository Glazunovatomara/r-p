import Button from '../Button/button'
import styles from './home.module.css'

const Home = () => {

    return(
        <div className={styles.home}>
            <Button nameButton={'Карточки'}/>
            <Button nameButton={'Словарь'}/>
        </div>
    )

}

export default Home

import styles from './header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <img src='./src/assets/logo.svg' alt="logo" className={styles.logo}/>
            <div className={styles.nav}></div>
        </header>
    )
}
export default Header
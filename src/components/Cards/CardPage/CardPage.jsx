import CardList from "../CardList/CardList";
import styles from "./cardPage.module.css";
import SliderBtn from "../SliderBtn/SliderBtn"

const CardPage = () => {
    return (
        <div className={styles.slider_page}>
        <div className = {styles.content}>
            <CardList/>
        </div>
            <SliderBtn/>
        </div>
        
    )
}

export default CardPage
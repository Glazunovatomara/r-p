import CardList from "../CardList/CardList";
import styles from "./cardPage.module.css"

const CardPage = () => {
    return (
        <div className = {styles.content}>
            <CardList/>
        </div>
    )
}

export default CardPage
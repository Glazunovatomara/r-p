import styles from './button.module.css';

const ButtonTypes = [ 'save', 'cancel', 'edit', 'delete']

const Button = ({onClick, nameButton, typeButton}) => {
    const classButton = ButtonTypes.includes 
    ? `button-${typeButton}`: 'button'

    return(
        <button className={styles[classButton]} onClick={onClick}>{nameButton}</button>
    )
}
export default Button;
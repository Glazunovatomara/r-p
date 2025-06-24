import styles from './button.module.css';

const ButtonTypes = [ 'save', 'cancel', 'edit', 'delete']

const Button = ({onClick, nameButton, typeButton, buttonIcons}) => {
    const classButton = ButtonTypes.includes 
    ? `button-${typeButton}`: 'button'
    
    return(
        <button className={styles[classButton]} onClick={onClick}>{nameButton}{buttonIcons}</button>
    )
}
export default Button;
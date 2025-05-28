import styles from './button.module.css';

const Button = (props) => {
    const [name, clas] = props;

    return(
        <button className={clas}>{name}</button>
    )
}
export default Button;
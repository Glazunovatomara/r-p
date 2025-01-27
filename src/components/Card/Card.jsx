import styles from './card.module.css';
import { useState } from 'react';

const Card = () => {
    const [state,setChange] = useState(0)

    let btn = `${styles.btn}`
    let translation = `${styles.invisibility}`

    const handleClick = () =>{
        setChange(state +1)
    }

    console.log (state)
    if (state != 0) {
        btn = `${styles.invisibility}`
        translation = `${styles.translation}`
    }

    return(
        <div className={styles.card}>
            <div className={styles.word_section}>
                <h2 className={styles.subtitle}>слово</h2>
                <p className={styles.transcription}>[транскрипция]</p>
            </div>
            <button className={btn} onClick={handleClick}>Проверить</button>
            <p className={translation}>перевод</p>    
        </div>
    )
}
export default Card
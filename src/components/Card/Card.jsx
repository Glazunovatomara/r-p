import styles from './card.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const {word,transcription,translation,index} = props;

    console.log(word)
    const [state,setChange] = useState('false')

    const handleClick = () =>{
        setChange('true')
        console.log(index)
    }

    let btnStyle = `${styles.btn}`
    let translationStyle = `${styles.invisibility}`

    console.log (state)
    if (state != 'false') {
        btnStyle = `${styles.invisibility}`
        translationStyle = `${styles.translation}`
    }

    return (
        <div className={styles.card}>
            <div className={styles.word_section}>
                <h2 className={styles.subtitle}>{word}</h2>
                <p className={styles.transcription}>[{transcription}]</p>
            </div>
            <button className={btnStyle} onClick={handleClick}>Проверить</button>
            <p className={translationStyle}>{translation}</p>    
        </div>
    )
};

Card.propTypes= {
    word: PropTypes.string,
    transcription: PropTypes.string,
    translation: PropTypes.string,
    index:PropTypes.num,
    //isActive: PropTypes.bool,
    //onChangeInComponent: PropTypes.func
};

export default Card;
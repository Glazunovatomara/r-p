import styles from './card.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const {english,transcription,russian,index} = props;

    console.log(english)
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
                <h2 className={styles.subtitle}>{english}</h2>
                <p className={styles.transcription}>[{transcription}]</p>
            </div>
            <button className={btnStyle} onClick={handleClick}>Проверить</button>
            <p className={translationStyle}>{russian}</p>    
        </div>
    )
};

Card.propTypes= {
    english: PropTypes.string,
    transcription: PropTypes.string,
    russian: PropTypes.string,
    index:PropTypes.num,
    //isActive: PropTypes.bool,
    //onChangeInComponent: PropTypes.func
};

export default Card;
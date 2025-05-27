import styles from './card.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const {english,transcription,russian} = props;

    //console.log(english)
    const [state,setChange] = useState(false)

    const handleClick = () =>{
        setChange(true)
        //console.log(index)
    }

    return (
        <div className={styles.card}>
            <div className={styles.word_section}>
                <h2 className={styles.subtitle}>{english}</h2>
                <p className={styles.transcription}>[{transcription}]</p>
            </div>
            {state ?(<p className={styles.translation}>{russian}</p>)
            :(<button className={styles.btn} onClick={handleClick}>Проверить</button>)} 
        </div>
    )
};

Card.propTypes= {
    english: PropTypes.string,
    transcription: PropTypes.string,
    russian: PropTypes.string,
    //index:PropTypes.num,
    //isActive: PropTypes.bool,
    //onChangeInComponent: PropTypes.func
};

export default Card;
import styles from "./word.module.css";
import { useState } from "react";
import PropTypes from "prop-types"

const Word = (props) => {
    
let i = 1
//render() {
    const {english,transcription,russian,tag} = props;
    console.log(english,transcription,russian,tag)
    console.log(english)

    const [state,setChange] = useState('false')

    const editClick = () => {
        setChange('true')
    }

    const saveClick = () => {
        setChange('false')
    }
    
    let textArrea = `${styles.word}`;
    let inputArrea = `${styles.invisible}`;

    console.log(state)

    if(state === 'true') {
        textArrea = `${styles.invisible}`;
        inputArrea = `${styles.word}`
    }

//}
    return(
        <div className={styles.word_arrea}>
            <p className={styles.number}>{i++}</p>
            <div className={textArrea}>
                <p className={styles.english}>english</p>
                <p className={styles.transcription}>transcription</p>
                <p className={styles.russian}>russian</p>
                <p className={styles.tag}>tag</p>
            </div>
            <div className={inputArrea}>
                <input type="text" className={styles.input} value='english'/>
                <input type="text" className={styles.input} value='transcription'/>
                <input type="text" className={styles.input} value='russian'/>
                <input type="text" className={styles.input} value='tag'/>
            </div>
            <div className={styles.btn_arrea}>
                <button onClick={saveClick}>Сохранить</button>
                <button className={styles.btn_edit} onClick={editClick}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="17" width="3" height="3" />
                        <rect x="4" y="11" width="1" height="7" />
                        <rect x="3" y="12" width="1" height="4" />
                        <rect x="2" y="13" width="1" height="3" />
                        <rect x="3" y="18" width="1" height="2" />
                        <rect x="1" y="14" width="1" height="1" />
                        <rect x="3" y="16" width="1" height="1" />
                        <rect x="1" y="16" width="1" height="1" />
                        <rect y="15" width="1" height="2" />
                        <rect x="4" y="19" width="1" height="1" />
                        <rect x="5" y="10" width="1" height="9" />
                        <rect x="6" y="9" width="1" height="9" />
                        <rect x="7" y="8" width="1" height="9" />
                        <rect x="8" y="7" width="1" height="9" />
                        <rect x="9" y="6" width="1" height="9" />
                        <rect x="10" y="5" width="1" height="9" />
                        <rect x="11" y="4" width="1" height="9" />
                        <rect x="12" y="5" width="1" height="7" />
                        <rect x="13" y="6" width="1" height="5" />
                        <rect x="14" y="7" width="1" height="3" />
                        <rect x="15" y="8" width="1" height="1" />
                        <rect x="13" y="2" width="5" height="1" />
                        <rect x="14" y="3" width="5" height="1" />
                        <rect x="15" y="4" width="5" height="1" />
                        <rect x="16" y="5" width="3" height="1" />
                        <rect x="14" y="1" width="3" height="1" />
                        <rect x="15" width="1" height="1" />
                        <rect x="17" y="6" width="1" height="1" />
                    </svg>
                </button>
                <button className={styles.btn_delete}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="2" width="16" height="1" />
                            <rect x="3" y="1" width="12" height="1" />
                            <rect x="6" width="6" height="1" />
                            <rect y="3" width="18" height="1" />
                            <rect x="2" y="7" width="1" height="6" />
                            <rect x="3" y="9" width="1" height="8" />
                            <rect x="4" y="19" width="10" height="1" />
                            <rect x="3" y="17" width="12" height="2" />
                            <rect x="1" y="5" width="16" height="2" />
                            <rect x="14" y="9" width="1" height="8" />
                            <rect x="11" y="7" width="1" height="10" />
                            <rect x="8" y="7" width="2" height="10" />
                            <rect x="6" y="7" width="1" height="10" />
                            <rect x="5" y="7" width="1" height="6" />
                            <rect x="12" y="7" width="1" height="6" />
                        <rect x="15" y="7" width="1" height="6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

Word.propTypes= {
    english: PropTypes.string,
    transcription: PropTypes.string,
    russian: PropTypes.string,
    //index:PropTypes.num,
    tag:PropTypes.string,
};

export default Word;

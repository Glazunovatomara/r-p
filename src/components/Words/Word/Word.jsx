import styles from "./word.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from '../../Button/button';

const Word = (props) => {
    const {english,transcription,russian,tag} = props;
    

    console.log(english,transcription,russian,tag)
    console.log(english)

    const [state,setChange] = useState(false)

    const editClick = () => {
        setChange(true)
    }

    const saveClick = () => {
        setChange(false)
    }

    const deleteClick = () => {
        console.log('delete')
    }
    const cancelClick = () => {

        setChange(false)
    }

    const handleInputChange = () => {}
console.log(state)
    return(
        <div className={styles.wordArrea}>
            <p className={styles.number}>1</p>
            {state 
            ?(<div className={styles.word}>
                <input type="text" className={styles.input} value='english' onChange={handleInputChange}/>
                <input type="text" className={styles.input} value='transcription' onChange={handleInputChange}/>
                <input type="text" className={styles.input} value='russian' onChange={handleInputChange}/>
                <input type="text" className={styles.input} value='tag' onChange={handleInputChange}/>
            </div>)
            :(<div className={styles.word}>
                <p className={styles.english}>{english}</p>
                <p className={styles.transcription}>{transcription}</p>
                <p className={styles.russian}>{russian}</p>
                <p className={styles.tag}>{tag}</p>
            </div>)
            }
            {state
                ?<div className={styles.btn_arrea}>
                    <Button typeButton={'save'} onClick={saveClick} buttonIcons={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 9H12V10H13V11V12H12V13H10V12H9V11V10H10V9Z"/>
                            <path d="M0 12L7 12V14H8V15H10V16H12V15H14V14H15V12H16V10H15V8H14V7H12V6H10V7H8V8H7V10H6V12H0V8H1V6H2V4H4V2H6V1H8V0H14V1H16V2H18V4H20V6H21V8H22V14H21V16H20V18H18V20H16V21H14V22H8V21H6V20H4V18H2V16H1V14L0 14V12Z"/>
                        </svg>} />
                    <Button typeButton={'cancel'} onClick={cancelClick} buttonIcons={<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.01328e-06 18H3V15H6V12H9V9H6V6H3V3H4.76837e-07V0H3V3H6V6H9L9 9H12V6H15V3H18V0H21V3H18V6H15V9H12V12H15V15H18V18H21V21H18V18H15V15H12L12 12H9V15H6V18H3V21H4.76837e-07L1.01328e-06 18Z"/>
                            <path d="M9 18H12V19H14V21H12H9H7V19H9V18Z" fill="#D50404"/>
                            <path d="M18 9H19V7H21V9V12V14H19V12H18V9Z" fill="#D50404"/>
                            <path d="M9 0H12H14V2H12V3H9V2H7V0H9Z" fill="#D50404"/>
                            <path d="M0 9V7H2V9H3V12H2V14H0V12V9Z" fill="#D50404"/>
                        </svg>} />
                </div>
                :<div className={styles.btn_arrea}>
                    <Button typeButton={'edit'} onClick={editClick} buttonIcons={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    </svg>} />
                <Button typeButton={'delete'} onClick={deleteClick} buttonIcons={<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    </svg>} />
            </div>
            }
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

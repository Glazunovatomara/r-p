import styles from "./words.module.css";
import PropTypes from "prop-types"

const Words = (props) => {
    //const {word,transcription,translation,index} = props;
let i = 1
    return(
        <div className={styles.word_arrea}>
            <p className={styles.number}>{i+1}</p>
            <div className={styles.word}>
                <p className={styles}>word</p>
                <p className={styles}>transcription</p>
                <p className={styles}>translation</p>
            </div>
            <div className={styles.btn_arrea}>
                <button>Сохранить</button>
                <button></button>
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

export default Words

Words.propTypes= {
    word: PropTypes.string,
    transcription: PropTypes.string,
    translation: PropTypes.string,
    index:PropTypes.num
};
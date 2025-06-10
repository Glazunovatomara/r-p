import Word from "../Word/Word";
import arrayo from "../../Array/arrayo";


const WordsList = () => {
    let newArray = arrayo.map((el,index) => {

        return (
            <Word
                english = {el.english}
                transcription = {el.transcription}
                russian = {el.russian}
                tag = {el.tags}
                index = {index}
                key = {index}
            />
        )
    });
    return <>{newArray}</>;
}

export default WordsList;
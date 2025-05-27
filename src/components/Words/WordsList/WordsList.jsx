import Word from "../Word/Word";
import array from "../../Array/array";


const WordsList = () => {
    let newArray = array.map((el,index) => {

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
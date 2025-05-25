import array from "../Array/array";
import Word from "../Word/Word";

const WordsList = () => {
    const NewArr = array.map((el, index) => {
        return (
            <Word
                english = {el.english}
                transcription = {el.transcription}
                russian = {el.russian}
                tag = {el.tag}
                //index = {index}
                key = {index}
            />
        )
    });

    return <>{NewArr}</>
}
export default WordsList;
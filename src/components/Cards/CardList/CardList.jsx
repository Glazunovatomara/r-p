import Card from "../Card/Card";
import array from "../../Array/array";

const CardList = () => {
    let newArray = array.map((el,index) => {

        return (
            <Card
                english = {el.english}
                transcription = {el.transcription}
                russian = {el.russian}
                index = {index}
                key = {index}
            />
        )
    });

    return <>{newArray}</>;

}

export default CardList;
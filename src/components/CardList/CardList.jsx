import Card from "../Card/Card";
import array from "../Array/array";
//import { useState } from "react";

const CardList = () => {
    //const [state,setChange] = useState('false')
//console.log(array.length)
    let newArr = array.map((el,index) => {

        return (
            <Card
                word = {el.word}
                transcription = {el.transcription}
                translation = {el.translation}
                index = {index}
                key = {index}
            />
        )
    });

    return <>{newArr}</>;

}

export default CardList;
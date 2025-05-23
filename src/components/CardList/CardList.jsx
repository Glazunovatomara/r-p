import Card from "../Card/Card";
import array from "../Array/array";
//import { useState } from "react";

const CardList = () => {
    //const [state,setChange] = useState('false')
//console.log(array.length)
    let newArr = array.map((el,index) => {

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

    return <>{newArr}</>;

}

export default CardList;
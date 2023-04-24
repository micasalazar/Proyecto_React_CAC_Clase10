import fullData from "../data/data.js";
import Card from "./card.js";

export default function CardIterada(){
    return(
        fullData.map(e=>(
            <Card data={e} key={e.id}></Card>
        ))
    )

}
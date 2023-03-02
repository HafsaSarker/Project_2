import { useState } from "react";
const Card = (props) => {    

    return(
        <div className="card-container">
            <h1>{props.cardText}</h1>
            <img src={`${props.img}.png`} />            
        </div>
    )
}
export default Card
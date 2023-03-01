import { useState } from "react";
const Card = (props) => {    

    return(
        <div className="card-container">
                <div className="front">
                <h1>{props.question}</h1>
                <img src={`${props.question}.png`} />
            </div>
            <div className="back">
                <h1>{props.answer}</h1>
            </div>
        </div>
    )
}
export default Card
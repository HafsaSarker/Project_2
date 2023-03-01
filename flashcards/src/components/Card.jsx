import { useState } from "react";
const Card = (props) => {    
    const [isNotFlipped, setIsNotFlip] = useState(false);
    const showBack = () => {
        setIsNotFlip(prevState => !prevState);
    }
    return(
        <div className="card-container" onClick={showBack} >
                <div className="front">
                <h1>{props.question}</h1>
                <img src={`${props.question}.png`} />
            </div>
            <div className="back">
                <h1>{isNotFlipped ? props.answer : ""}</h1>
            </div>
        </div>
    )
}
export default Card
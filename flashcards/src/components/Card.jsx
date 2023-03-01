const Card = (props) => {
    return(
        <div className="card-container">
            <h1>{props.question}</h1>
            <img src={`${props.question}.png`} />
            <h1>{props.answer}</h1>
        </div>
    )
}
export default Card
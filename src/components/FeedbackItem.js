const FeedbackItem = (props) => {
    if (props.given !== null) {
        return (
            <p>{props.name} (value: {props.value}), given {props.given} time(s)</p>
        )
    } else {
        return (
            <p>{props.name}: {props.value}</p>
        )
    }
}

export default FeedbackItem;
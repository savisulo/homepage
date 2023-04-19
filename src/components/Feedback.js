import FeedbackItem from './FeedbackItem'

const Feedback = (props) => {
    return (
        <>
        <p><b>{props.type}:</b></p>
        {props.values.map(v => <FeedbackItem key={v.id} name={v.name} value={v.value} given={v.given} />)}
        </>
    )
}

export default Feedback;
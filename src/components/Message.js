const Message = (props) => {
    return (
        <>
        <p><b>Sender: {props.name}, {props.email}</b></p>
        <p>{props.subject}</p>
        <p>{props.message}</p>
        </>
    )
}

export default Message;
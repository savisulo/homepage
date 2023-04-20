const Notification = (props) => {
    if (props.alert === null) {
      return null
    }
    return (
      <div className="alert">
        {props.alert}
      </div>
    )
}

export default Notification;
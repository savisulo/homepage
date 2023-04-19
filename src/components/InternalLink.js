const InternalLink = (props) => {
    return (
      <a href={props.href} className={props.className}>
        {props.text}
      </a>
    )
}

export default InternalLink;
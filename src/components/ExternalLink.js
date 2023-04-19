const ExternalLink = (props) => {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.text}
      </a>
    )
}

export default ExternalLink;
const Image = (props) => {
    return (
      <img src={props.src} alt={props.alt} height={props.height} className={props.className} />
    )
}

export default Image;
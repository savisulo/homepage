import Image from './Image'

const LinkWithImage = (props) => {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <Image src={props.src} alt={props.alt} height={props.height} />
      </a>
    )
}

export default LinkWithImage;
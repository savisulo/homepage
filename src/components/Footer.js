import LinkWithImage from './LinkWithImage'

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; <span>{year}</span>, Suvi Salo</p>
      <div>
        <LinkWithImage href="https://www.linkedin.com/in/suvi-salo-b9799215a" src={process.env.PUBLIC_URL + '/LI-In-Bug_gray.png'} alt="Linkedin" height="20px" />
        <LinkWithImage href="https://github.com/savisulo" src={process.env.PUBLIC_URL + '/github-mark-gray.png'} alt="Github" height="20px" />
      </div>
      <p className="download" onClick={props.download}>Download Resume &#10149;</p>
    </footer>
  )
}

export default Footer;
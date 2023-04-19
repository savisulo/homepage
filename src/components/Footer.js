import LinkWithImage from './LinkWithImage'

const Footer = () => {
    return (
      <footer>
        <p>&copy; <span></span>, Suvi Salo</p>
        <div>
          <LinkWithImage href="https://www.linkedin.com/in/suvi-salo-b9799215a" src="../static/LI-In-Bug_gray.png" alt="Linkedin" height="20px" />
          <LinkWithImage href="https://github.com/savisulo" src="../static/github-mark-gray.png" alt="Github" height="20px" />
        </div>
        <p><a href='#'>Download Resume &#10149;</a></p>
      </footer>
    )
}

export default Footer;
import InternalLink from './InternalLink'
import LinkWithImage from './LinkWithImage'


const Header = () => {
    return (
      <header id="header">
        <div className="image-links">
          <LinkWithImage href="https://www.linkedin.com/in/suvi-salo-b9799215a" src={process.env.PUBLIC_URL + '/LI-In-Bug_pink.png'} alt="Linkedin" height="20px" />
          <LinkWithImage href="https://github.com/savisulo" src={process.env.PUBLIC_URL + '/github-mark-pink.png'} alt="Github" height="20px" />
        </div>
        <InternalLink href="#header" text={<h1>SUVI SALO</h1>} />
        <p>Web Developer</p>
        <div className="navbar">
          <InternalLink href="#about" text="ABOUT" className="navbar-item" />
          <InternalLink href="#projects" text="PROJECTS" className="navbar-item" />
          <InternalLink href="#contact" text="CONTACT" className="navbar-item" />
        </div>
      </header>
    )
}

export default Header;
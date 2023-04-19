import InternalLink from './InternalLink'
import LinkWithImage from './LinkWithImage'


const Header = () => {
    return (
      <header id="header">
        <div className="image-links">
          <LinkWithImage href="https://www.linkedin.com/in/suvi-salo-b9799215a" src="../static/LI-In-Bug_pink.png" alt="Linkedin" height="20px" />
          <LinkWithImage href="https://github.com/savisulo" src="../static/github-mark-pink.png" alt="Github" height="20px" />
        </div>
        <InternalLink href="{{ url_for('main.index') }}" text={<h1>SUVI SALO</h1>} />
        <p>Web Developer</p>
        <div className="navbar">
          <InternalLink href="{{ url_for('main.index', _anchor='about') }}" text="ABOUT" className="navbar-item" />
          <InternalLink href="{{ url_for('main.index', _anchor='projects') }}" text="PROJECTS" className="navbar-item" />
          <InternalLink href="{{ url_for('main.index', _anchor='contact') }}" text="CONTACT" className="navbar-item" />
        </div>
      </header>
    )
}

export default Header;
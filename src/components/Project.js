import ExternalLink from './ExternalLink'
import LinkWithImage from './LinkWithImage'
import Image from './Image'

const Project = (props) => {
    return (
      <div className="project">
        <div>
          <ExternalLink href={props.webLink} text={props.linkText} />
          <LinkWithImage href={props.githubLink} src="../static/github-mark-white.png" alt="Github" height="20px" />
        </div>
        <h4>{props.heading}</h4>
        <p className="smalltext">
          {props.introText}
        </p>
        <button id="read-more1">READ MORE</button>
        <p className="smalltext">
          {props.technologies}
        </p>
        <div id="portfolio-box" className="box">
          <div className="box-content">
            <div className="links">
              <div>
                <ExternalLink href={props.webLink} text={props.linkText} />
                <LinkWithImage href={props.githubLink} src="../static/github-mark-white.png" alt="Github" height="20px" />
              </div>
              <p className="close" id="close1">&times;</p>
            </div>
            <h4>{props.heading}</h4>
            <div className="main-content">
              <p>
                {props.mainText}
              </p>
              <div>
                <Image src={props.imageSource} alt={props.imageAlt} className={props.imageClassName} />
                <div>
                  {props.technologiesList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Project;
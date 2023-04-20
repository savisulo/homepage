import ExternalLink from './ExternalLink'
import LinkWithImage from './LinkWithImage'
import Image from './Image'
import Popup from 'reactjs-popup'


const Project = (props) => {
    return (
      <div className="project">
        <div>
          <ExternalLink href={props.webLink} text={props.linkText} />
          <LinkWithImage href={props.githubLink} src={process.env.PUBLIC_URL + 'github-mark-white.png'} alt="Github" height="20px" />
        </div>
        <h4>{props.heading}</h4>
        <p className="smalltext">
          {props.introText}
        </p>
        <Popup trigger=
          {<button>READ MORE</button>}
          modal nested>
          {
            close => (
              <div className="box">
                <div className="box-content">
                  <div className="links">
                    <div>
                      <ExternalLink href={props.webLink} text={props.linkText} />
                      <LinkWithImage href={props.githubLink} src={process.env.PUBLIC_URL + 'github-mark-white.png'} alt="Github" height="20px" />
                    </div>
                    <p class="close" onClick={() => close()}>&times;</p>
                  </div>
                  <h4>{props.heading}</h4>
                  <div className="main-content">
                      {props.mainText}
                    <div>
                      <Image src={props.imageSource} alt={props.imageAlt} className={props.imageClassName} />
                      {props.technologiesList}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </Popup>
        <p className="smalltext">
          {props.technologies}
        </p>
      </div>
    )
}

export default Project;
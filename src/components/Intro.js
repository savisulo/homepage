import InternalLink from './InternalLink'

const Intro = (props) => {
    return (
      <section>
        <h2>
          GREETINGS, MY NAME IS SUVI!
        </h2>
        <div className="introduction-text">
            <p>
                I'm a budding web developer who takes pride in delivering high-quality results in every project I'm involved in.
                I'm driven to design and develop websites and softwares that are not only aesthetically pleasing,
                but also intuitive and user-friendly.
                My goal is to start my coding career as a junior web developer or a trainee,
                with a focus on either front-end or back-end development, and eventually progress to become
                a highly skilled full-stack developer.
            </p>
            <p>
                I'm excited about the possibilities that lie ahead in my coding career, and I can't wait to see where
                this journey takes me next, or where I'm taking myself for a journey! So if you're looking for a motivated,
                detail-oriented, and friendly team member to join your company, I would love to hear from you!
            </p>
        </div>
        <div className="aligned-buttons">
            <div className="button">
              <InternalLink href="#projects" text="MY PROJECTS" />
            </div>
            <button className="button" onClick={props.download}>DOWNLOAD RESUME</button>
        </div>
      </section>
    )
}

export default Intro;
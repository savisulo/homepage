// import { useState } from 'react'
const Image = (props) => {
  return (
    <img src={props.src} alt={props.alt} height={props.height} className={props.className} />
  )
}

const LinkWithImage = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <Image src={props.imageSource} alt={props.imageAlt} height={props.imageHeight} />
    </a>
  )
}

const Project = (props) => {
  return (
    <div className="project">
      <div>
        <LinkWithImage href={props.githubLink} imageSource="../static/github-mark-white.png" imageAlt="Github" imageHeight="20px" />
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
          <LinkWithImage href={props.githubLink} imageSource="../static/github-mark-white.png" imageAlt="Github" imageHeight="20px" />
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
                {props.tech}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h2>CONTACT ME</h2>
      <div className="contact-background">
        <div className="contact-content">
          <p>You can contact me through the form below or just hit me with an email:</p>
          <a href = "mailto: suvi.j.salo@gmail.com">suvi.j.salo@gmail.com</a>
          <form method="POST">
          </form>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <h2>MY PROJECTS</h2>
      <p>
          As you explore my projects section, you will find a collection of recent work that
          I am proud to showcase. In addition to these personal projects, I am currently engaged
          in several programming courses, including the Helsinki University MOOC
          (basics and follow-up courses of Python), Front End Web Development at TreeHouse
          (which I have recently completed), and Full Stack Open. Throughout these courses,
          I have tackled various topics and completed a range of smaller projects to reinforce
          my learning. For more information on these courses, please refer to my resume.
      </p>
      <div className="projects">
        <Project
          heading="Homepage | Portfolio"
          introText="The website you are currently visiting is one of my..."
          technologies="Python | Flask | HTML | CSS | JavaScript"
          mainText="The website you are currently visiting is one of my ongoing projects that I am constantly
                    working to improve. One of the upcoming tasks on my to-do list for this website is to make
                    it multilingual. Additionally, I am considering implementing some cool and innovative features,
                    such as animations, to showcase my programming skills and make the website more engaging for
                    visitors. While these features may not be strictly necessary, I believe they will enhance
                    the overall user experience and demonstrate the full potential of the website."
          tech={
            <>
              <p>Python</p>
              <p>FLASK</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </>
          }
          githubLink="https://github.com/savisulo/Portfolio"
          imageSource="../static/portfolio.png"
          imageAlt="portfolio page"
          imageClassName="content-image"
        />
        <Project
          heading="My Periodic Table"
          introText="This project began as a learning opportunity when I started..."
          technologies="React | JavaScript | HTML | CSS"
          mainText="This project began as a learning opportunity when I started exploring React.
                    At the time I was also reading about CSS Grid and I thought that periodic table fits
                    quite perfectly to practice that layout. While the initial goal was to simply
                    experiment with React and CSS Grid, the project is going to evolve into something
                    more significant. The focus has now shifted towards the development of a user-friendly
                    and effective tool that could be used for example by students in upper secondary school
                    to aid in their chemistry studies. This is how I also can bring a bit of my background in chemistry into coding."
          tech={
            <>
              <p>React</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </>
          }
          githubLink="https://github.com/savisulo/Portfolio"
          imageSource="../static/portfolio.png"
          imageAlt="portfolio page"
          imageClassName="content-image"
        />
        <Project
          heading="LeikkiTreffit"
          introText='My first project "Playdate" was created to address...'
          technologies="HTML | CSS | JavaScript | PHP"
          mainText='My first project "Playdate" was created to address the issue of loneliness among parents,
                    particularly during their parental leave. The project aims to provide a platform for parents
                    and their children to meet and receive support from each other. The platform allows users to
                    leave notes indicating their planned activities, such as visiting a playground, along with
                    the date and time. Other parents who are interested in joining can view the notes and decide
                    whether or not to participate, based on their own schedules.
                    By facilitating social interactions between parents and children, "Playdate" seeks to create
                    a supportive community that can help alleviate feelings of isolation and loneliness that
                    can often accompany the experience of being a new parent.<br/>
                    This project is very much a work-in-progress and is missing several features,
                    including user authentication and map view. Despite this, the goal of the project
                    is to be completed and eventually become a useful tool for its intended audience.'
          tech={
            <>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>PHP</p>
            </>
          }
          githubLink="https://github.com/savisulo/Portfolio"
          imageSource="../static/portfolio.png"
          imageAlt="portfolio page"
          imageClassName="content-image"
        />
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>ABOUT ME</h2>
      <div className="about-text">
        <p>
            I graduated as a chemist back in 2017 and have since been working mainly in the area of education,
            first in Otava Publishing Company as a publishing editor of upper secondary school chemistry learning materials,
            and after that as a developer of digital chemistry learning materials in MAFY Oy.
        </p>
        <p>
            My journey into web development began in the summer of 2022, when I fully discovered my love for coding.
            I first attended to some online courses (Front End Web Development track in teamtreehouse.com and MOOC
            in University of Helsinki) and then I applied to an intense training of modern web development
            lasting for 6 months (ending in March 2023). I am very happy and proud of
            myself for making this career change in my life, this really is The Thing for me!
            But Im not going to totally forget about my previous life involved in chemistry, since chemistry and coding
            goes really well together as well, so it would be great to combine those two in the future.
        </p>
        <p>
            One of my greatest strengths as a developer is my ability to persist and never give up when faced with a challenge.
            I'm always eager to learn new things and improve my skills, which has helped me make rapid progress in my coding journey.
            I also have a knack for memorizing complex concepts and quickly applying them in real-world situations.
            While I may be a bit introverted, I also enjoy being part of a community and working with a diverse range of people.
            I am kind and always willing to help out my colleagues when needed. My personality can best be described as calm,
            thorough, pondering and detail-oriented, which has proven to be a valuable asset when it comes to writing clean
            and efficient code.
        </p>
        <p>
            Technologies I've been working with:
        </p>
        <div className="lists">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
            <ul>
                <li>PHP</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Bootstrap</li>
            </ul>
            <ul>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>Git</li>
            </ul>
        </div>
        <p>
            When I'm not exploring new coding frameworks and libraries or tinkering with my own personal projects, I enjoy
            reading good books, watching drama and psychological thrillers, jogging, and practicing reformer Pilates.
        </p>
      </div>
    </div>
  )
}

const Intro = () => {
  return (
    <div>
      <h2>
        GREETINGS, MY NAME IS SUVI!
      </h2>
      <div className="introduction-text">
          <p>
              I'm a budding web developer who takes pride in delivering high-quality results in every project I'm involved in.
              I'm driven to design and develop websites and softwares that are not only aesthetically pleasing,
              but also intuitive and user-friendly.
              My goal is to start my coding career as a junior web developer or trainee,
              with a focus on either front-end or back-end development, and eventually progress to become
              a highly skilled senior full-stack developer.
          </p>
          <p>
              I'm excited about the possibilities that lie ahead in my coding career, and I can't wait to see where
              this journey takes me next, or where I'm taking myself for a journey! So if you're looking for a motivated,
              detail-oriented, and friendly team member to join your company, I would love to hear from you!
          </p>
      </div>
      <div className="aligned-buttons">
          <div className="button">
              <a href="{{ url_for('main.index', _anchor='projects') }}">MY PROJECTS</a>
          </div>
          <div className="button">
              <a href="{{ url_for('main.index', _anchor='projects') }}">DOWNLOAD RESUME</a>
          </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>&copy; <span></span>, Suvi Salo</p>
      <div>
        <a href='https://www.linkedin.com/in/suvi-salo-b9799215a' target="_blank" rel="noopener noreferrer"><img src='../static/LI-In-Bug_gray.png' alt="Linkedin" height="20px"/></a>
        <a href='https://github.com/savisulo' target="_blank" rel="noopener noreferrer"><img src='../static/github-mark-gray.png' alt="Github" height="20px"/></a>
      </div>
      <p><a href='#'>Download Resume &#10149;</a></p>
    </footer>
  )
}

const Content = () => {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

const Header = () => {
  return (
    <header id="header">
      <div className="image-links">
        <a href="https://www.linkedin.com/in/suvi-salo-b9799215a" target="_blank" rel="noopener noreferrer"><img src="../static/LI-In-Bug_pink.png" alt="Linkedin" height="20px"/></a>
        <a href="https://github.com/savisulo" target="_blank" rel="noopener noreferrer"><img src="../static/github-mark-pink.png" alt="Github" height="20px"/></a>
      </div>
      <a href="{{ url_for('main.index') }}"><h1>SUVI SALO</h1></a>
      <p>Web Developer</p>
      <div className="navbar">
        <a href="{{ url_for('main.index', _anchor='about') }}" className="navbar-item">ABOUT</a>
        <a href="{{ url_for('main.index', _anchor='projects') }}" className="navbar-item">PROJECTS</a>
        <a href="{{ url_for('main.index', _anchor='contact') }}" className="navbar-item">CONTACT</a>
      </div>
    </header>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App;
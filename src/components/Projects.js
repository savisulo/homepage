import Project from './Project'

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
            technologiesList={
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
            technologiesList={
              <>
                <p>React</p>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>CSS</p>
              </>
            }
            githubLink="https://github.com/savisulo/PeriodicTable"
            webLink="https://periodic-table-voua.onrender.com/"
            linkText="&#10149;"
            imageSource="../static/periodictable.png"
            imageAlt="periodic table page"
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
            technologiesList={
              <>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>PHP</p>
              </>
            }
            githubLink="https://github.com/savisulo/Leikkitreffit"
            imageSource="../static/playdate.png"
            imageAlt="playdate page"
            imageClassName="content-image"
          />
        </div>
      </div>
    )
}

export default Projects;
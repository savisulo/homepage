import Project from './Project'

const Projects = () => {
    return (
      <section id="projects">
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
            technologies="React | JavaScript | HTML | CSS | MongoDB"
            mainText={
              <p>
                The website you are currently visiting is one of my ongoing projects that I am constantly
                working to improve. One of the upcoming tasks on my to-do list for this website is to make
                it multilingual. Additionally, I am considering implementing some cool and innovative features,
                such as animations, to showcase my programming skills and make the website more engaging for
                visitors. While these features may not be strictly necessary, I believe they will enhance
                the overall user experience and demonstrate the full potential of the website.<br/>
                I actually started this work first as a Flask-project, but then decided to change to React
                since I find it a bit more fun to use. I also have more experience with React than with Flask.
              </p>
            }
            technologiesList={
              <div>
                <p>React</p>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>MongoDB</p>
              </div>
            }
            githubLink="https://github.com/savisulo/homepage"
            imageSource={process.env.PUBLIC_URL + 'portfolio.png'}
            imageAlt="portfolio page"
            imageClassName="content-image"
          />
          <Project
            heading="My Periodic Table"
            introText="This project began as a learning opportunity when I started..."
            technologies="React | JavaScript | HTML | CSS | MongoDB"
            mainText={
              <p>
                This project began as a learning opportunity when I started exploring React.
                At the time I was also reading about CSS Grid and I thought that periodic table fits
                quite perfectly to practice that layout. While the initial goal was to simply
                experiment with React and CSS Grid, the project is going to evolve into something
                more significant. The focus has now shifted towards the development of a user-friendly
                and effective tool that could be used for example by students in upper secondary school
                to aid in their chemistry studies. This is how I also can bring a bit of my background in chemistry into coding.
              </p>
            }
            technologiesList={
              <div>
                <p>React</p>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>MongoDB</p>
              </div>
            }
            githubLink="https://github.com/savisulo/PeriodicTable"
            webLink="https://periodic-table-voua.onrender.com/"
            linkText="&#10149;"
            imageSource={process.env.PUBLIC_URL + 'periodictable.png'}
            imageAlt="periodic table page"
            imageClassName="content-image"
          />
          <Project
            heading="LeikkiTreffit"
            introText='My first project "Playdate" was created to address...'
            technologies="HTML | CSS | JavaScript | PHP"
            mainText={
              <p>
                My first project "Playdate" was created to address the issue of loneliness among parents,
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
                is to be completed and eventually become a useful tool for its intended audience.
              </p>
            }
            technologiesList={
              <div>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>PHP</p>
              </div>
            }
            githubLink="https://github.com/savisulo/Leikkitreffit"
            imageSource={process.env.PUBLIC_URL + 'playdate.png'}
            imageAlt="playdate page"
            imageClassName="content-image"
          />
        </div>
      </section>
    )
}

export default Projects;
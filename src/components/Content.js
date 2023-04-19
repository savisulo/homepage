import Statistics from './Statistics'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'


const Content = (props) => {
    return (
      <div>
        <div>
          <h3>Give feedback of the page</h3>
          <button onClick={props.handleclickGood}>
            Good
          </button>
          <button onClick={props.handleclickNeutral}>
            Neutral
          </button>
          <button onClick={props.handleclickBad}>
            Bad
          </button>
        </div>
        <Statistics good={props.good} neutral={props.neutral} bad={props.bad} all={props.all} average={props.average} positive={props.positive} />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    )
}

export default Content;
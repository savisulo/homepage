import { useState } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Feedback from './components/Feedback'


const App = (props) => {
  const [feedback, setFeedback] = useState(props.feedback)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [points, setPoints] = useState(0)

  const total = feedback[0].values.map(f => f.given)
  const sum = total.reduce((accumulator, currentValue) => accumulator + currentValue)

  const pressGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setPoints(points + 1)
  }

  const pressNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const pressBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setPoints(points - 1)
  }

  const average = points / all
  const positive = (good / all) * 100

  return (
    <>
      <Header />
      <h3>Feedback given from database:</h3>
      {feedback.map(f =>
        <Feedback key={f.id} type={f.type} values={f.values} />
      )}
      <p>all feedback from database: {sum}</p>
      <Content
        handleclickGood={pressGood}
        good={good}
        handleclickNeutral={pressNeutral}
        neutral={neutral}
        handleclickBad={pressBad}
        bad={bad}
        all={all}
        average={average}
        positive={positive} />
      <Footer />
    </>
  )
}

export default App;
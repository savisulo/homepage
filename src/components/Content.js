import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'


const Content = (props) => {
    return (
      <div className="body-content">
        <Intro download={props.download} />
        <About />
        <Projects />
        <Contact
          alert={props.alert}
          sendMessage={props.onSubmit}
          newName={props.value1}
          handleNameChange={props.onChange1}
          newEmail={props.value2}
          handleEmailChange={props.onChange2}
          newSubject={props.value3}
          handleSubjectChange={props.onChange3}
          newMessage={props.value4}
          handleMessageChange={props.onChange4}
        />
      </div>
    )
}

export default Content;
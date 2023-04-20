import InternalLink from './InternalLink'
import Notification from './Notification'

const Contact = (props) => {
    return (
      <section id="contact">
        <h2>CONTACT ME</h2>
        <div className="contact-background">
          <div className="contact-content">
            <p>You can contact me through the form below or just hit me with an email:</p>
            <InternalLink href="mailto: suvi.j.salo@gmail.com" text="suvi.j.salo@gmail.com" />
            <Notification alert={props.alert} />
            <form onSubmit={props.sendMessage}>
              <label for="name">Your Name:</label><br/>
              <input name="name" value={props.newName} onChange={props.handleNameChange} className="input-field" /><br/>
              <label for="email">Your Email:</label><br/>
              <input name="email" value={props.newEmail} onChange={props.handleEmailChange} className="input-field" /><br/>
              <label for="subject">Subject:</label><br/>
              <input name="subject" value={props.newSubject} onChange={props.handleSubjectChange} className="input-field" /><br/>
              <label for="message">Message:</label><br/>
              <textarea name="message" value={props.newMessage} onChange={props.handleMessageChange} className="textarea-field" /><br/>
              <button type="submit" className="submit-button">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    )
}

export default Contact;
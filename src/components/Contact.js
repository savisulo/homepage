import InternalLink from './InternalLink'

const Contact = () => {
    return (
      <div>
        <h2>CONTACT ME</h2>
        <div className="contact-background">
          <div className="contact-content">
            <p>You can contact me through the form below or just hit me with an email:</p>
            <InternalLink href="mailto: suvi.j.salo@gmail.com" text="suvi.j.salo@gmail.com" />
            <form method="POST">
            </form>
          </div>
        </div>
      </div>
    )
}

export default Contact;
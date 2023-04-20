import { useState, useEffect } from 'react'
import messageService from './services/messages'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'


const App = () => {
  const [messages, setMessages] = useState([])
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newSubject, setNewSubject] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [alert, setAlert] = useState(null)

  useEffect(() => {
    messageService
      .getAll()
      .then(initialMessages => {
        setMessages(initialMessages)
      })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    const messageObject = {
      name: newName,
      email: newEmail,
      subject: newSubject,
      message: newMessage,
      id: messages.length + 1
    }

    messageService
      .create(messageObject)
      .then(returnedMessage => {
        setMessages(messages.concat(returnedMessage))
        setNewName('')
        setNewEmail('')
        setNewSubject('')
        setNewMessage('')
      })

    if (messages.some(m => m.email.toLowerCase() === newEmail.toLowerCase())) {
      setAlert(`You sent me another message ${newName}, thank you!`)
    } else {
      setAlert(`Thank you for your message ${newName}!`)
    }
    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value)
  }

  const handleSubjectChange = (event) => {
    setNewSubject(event.target.value)
  }

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const downloadFile = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const cvEnUrl = `${process.env.PUBLIC_URL}/CVSaloEn.pdf`
    const cvFiUrl = `${process.env.PUBLIC_URL}/CVSaloFi.pdf`

    const choice = window.prompt('Do You want to download my resume in english (type 1) or in finnish (type 2)?');
    if (choice === '1') {
      downloadFile(cvEnUrl);
    } else if (choice === '2') {
      downloadFile(cvFiUrl);
    } else {
      window.alert('Invalid choice');
    }
};

  return (
    <>
      <Header />
      <Content
        onSubmit={sendMessage}
        value1={newName}
        onChange1={handleNameChange}
        value2={newEmail}
        onChange2={handleEmailChange}
        value3={newSubject}
        onChange3={handleSubjectChange}
        value4={newMessage}
        onChange4={handleMessageChange}
        alert={alert}
        download={handleDownload}
      />
      <div class="to-top" id="to-top">
        <a href="#header">&#8679;</a>
      </div>
      <Footer download={handleDownload} />
    </>
  )
}

export default App;
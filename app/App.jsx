import React from 'react'
import io from 'socket.io-client'
import Messages from './components/messages'
import Form from './components/form'
import Message from './elements/message'
import styles from './styles/App.css'

const socket = io()
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  addMessage(message) {
    this.setState((prevState) => {
      return {messages: [...prevState.messages, message]}
    })
  }

  renderMessages(messages) {
    const list = []
    for(let i = 0; i < messages.length; i++) {
      list.push(<Message key={i} text={messages[i]} />)
    }
    return <Messages>{list}</Messages>
  }

  componentDidMount() {
    const addMessage = this.addMessage.bind(this)
    socket.on('chat message', function(message) {
      addMessage(message)
    })
  }

  onSubmit(e) {
    e.preventDefault()
    socket.emit('chat message', e.target.message.value)
  }

  render () {
    return (
      <div className={styles.app}>
        {this.renderMessages.bind(this)(this.state.messages)}
        <Form onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default App

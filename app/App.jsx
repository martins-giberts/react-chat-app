import io from 'socket.io-client'
import React from 'react'
import Form from './components/form'
import Message from './elements/message'
import Messages from './components/messages'
import styles from './styles/App.css'

import {observer} from 'mobx-react'
import chatStore from './models/chatStore'

const socket = io()

@observer
class App extends React.Component {
  renderMessages() {
    const list = chatStore.messages.map((text, key) => {
      return <Message key={key} text={text} />
    })
    return <Messages>{list}</Messages>
  }

  componentDidMount() {
    socket.on('chat message', function(message) {
      chatStore.addMessage(message)
    })
  }

  onSubmit(e) {
    e.preventDefault()
    socket.emit('chat message', e.target.message.value)
  }

  render () {
    return (
      <div className={styles.app}>
        <small>Current messages count: {chatStore.messagesCount}</small>
        {this.renderMessages()}
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default App

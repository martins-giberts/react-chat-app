import {observer} from 'mobx-react'
import React, {Component} from 'react'
import chatStore from '../../models/chatStore'
import Message from '../../elements/message'
import socket from '../../lib/clientSocket'
import styles from './Messages.css'

@observer
class Messages extends Component {
  componentDidMount() {
    socket.on('chat message', function(message) {
      chatStore.addMessage(message)
    })
  }

  render () {
    return(
      <ul className={styles.messages}>
        {chatStore.messages.map((text, key) => {
          return <Message key={key} text={text} />
        })}
      </ul>
    )
  }
}

export default Messages

import {observer} from 'mobx-react'
import React, {Component} from 'react'
import chatStore from '../../models/chatStore'
import Message from '../../elements/message'
import socket from '../../lib/clientSocket'
import styled from 'styled-components'

const MessagesCss = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

@observer
class Messages extends Component {
  componentDidMount() {
    socket.on('chat message', function(message) {
      chatStore.addMessage(message)
    })
  }

  render () {
    return(
      <MessagesCss>
        {chatStore.messages.map((text, key) => {
          return <Message key={key} text={text} />
        })}
      </MessagesCss>
    )
  }
}

export default Messages

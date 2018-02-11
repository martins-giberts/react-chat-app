import React from 'react'
import Form from '../components/form'
import Messages from '../components/messages'

import {observer} from 'mobx-react'
import chatStore from '../models/chatStore'

const Chat = observer(() =>
  <div>
    <small>Current messages count: {chatStore.messagesCount}</small>
    <Messages />
    <Form />
  </div>
)

export default Chat

import React from 'react'
import Form from './components/form'
import Messages from './components/messages'
import styles from './styles/App.css'

import {observer} from 'mobx-react'
import chatStore from './models/chatStore'

const App = observer(() => {
  return (
    <div className={styles.app}>
      <small>Current messages count: {chatStore.messagesCount}</small>
      <Messages />
      <Form />
    </div>
  )
})

export default App

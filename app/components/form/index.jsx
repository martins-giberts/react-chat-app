import React, {Component} from 'react'
import socket from '../../lib/clientSocket'
import styles from './Form.css'

class Form extends Component {
  onSubmit(e) {
    e.preventDefault()
    socket.emit('chat message', e.target.message.value)
  }

  render() {
    return(
      <form onSubmit={this.onSubmit} className={styles.form}>
        <input name='message' autoComplete={'off'} />
        <button>Send</button>
      </form>
    )
  }
}

export default Form

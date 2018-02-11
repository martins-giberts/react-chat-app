import React, {Component} from 'react'
import socket from '../../lib/clientSocket'
import styled from 'styled-components'

const FormCss = styled.form`
  background: #000;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;

  input {
    border: 0;
    padding: 10px;
    width: 90%;
    margin-right: .5%;
  }

  button {
    width: 9%;
    background: rgb(130, 224, 255);
    border: none;
    padding: 10px;
  }
`

class Form extends Component {
  onSubmit(e) {
    e.preventDefault()
    socket.emit('chat message', e.target.message.value)
  }

  render() {
    return(
      <FormCss onSubmit={this.onSubmit}>
        <input name='message' autoComplete={'off'} />
        <button>Send</button>
      </FormCss>
    )
  }
}

export default Form

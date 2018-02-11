import React from 'react'
import styled from 'styled-components'

const MessageCss = styled.li`
  padding: 5px 10px;

  &:nth-child(odd) {
    background: #eee;
  }
`

const Message = ({
  text,
}) =>
  <MessageCss>
    {text}
  </MessageCss>

export default Message

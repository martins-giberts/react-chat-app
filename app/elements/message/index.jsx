import React from 'react'
import PropTypes from 'prop-types'
import styles from './Message.css'

const Message = ({
  text,
}) =>
  <li className={styles.message}>
    {text}
  </li>

Message.propTypes = {
  text: PropTypes.string,
}

export default Message

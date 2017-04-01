import React, {PropTypes} from 'react'
import styles from './Messages.css'

const Messages = ({
  children,
}) =>
  <ul className={styles.messages}>
    {children}
  </ul>

Messages.propTypes = {
  children: PropTypes.any,
}

export default Messages

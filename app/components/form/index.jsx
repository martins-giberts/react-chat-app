import React, {PropTypes} from 'react'
import styles from './Form.css'

const Form = ({
  onSubmit,
}) =>
  <form onSubmit={onSubmit} className={styles.form}>
    <input name='message' autoComplete={'off'} />
    <button>Send</button>
  </form>

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form

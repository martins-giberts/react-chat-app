import React, {PropTypes} from 'react'
import styles from '../styles/App.css'

const App = ({children}) =>
  <div className={styles.app}>
    {children}
  </div>

App.propTypes = {
  children: PropTypes.any
}

export default App

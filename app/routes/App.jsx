import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/App.css'

const App = ({children}) =>
  <div className={styles.app}>
    {children}
  </div>

App.propTypes = {
  children: PropTypes.any
}

export default App

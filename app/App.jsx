import React from 'react'
import styles from './styles/App.css'

class App extends React.Component {
  render () {
    return (
      <div className={styles.app}>
        Hi there! :)<br/>
        <a href="//github.com/martins-giberts">Find me on GitHub</a>
      </div>
    )
  }
}

export default App

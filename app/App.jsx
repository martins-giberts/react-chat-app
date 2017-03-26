import React from 'react'
import styles from './styles/App.css'

class App extends React.Component {
  render () {
    return (
      <div className={styles.app}>
        <div>
          <span className={[styles.text_sea_foaming, styles.smile_emoticon].join(' ')} >:)</span> <span className={styles.text_sunlit_sea} >Hi there!</span>
        </div>

        <div>
          <a href="//github.com/martins-giberts/martins-giberts.github.io">Find me on GitHub</a>
        </div>
      </div>
    )
  }
}

export default App

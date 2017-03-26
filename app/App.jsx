import React from 'react'
import styles from './styles/App.css'

import Link from './elements/link'

class App extends React.Component {
  render () {
    return (
      <div className={styles.app}>
        <h1>
          <span className={[styles.text_sea_foaming, styles.smile_emoticon].join(' ')} >:)</span> <span className={styles.text_sunlit_sea} >Hi there!</span>
        </h1>

        <div>
          <Link href="//github.com/martins-giberts/martins-giberts.github.io"><i className="fa fa-github" aria-hidden="true"></i></Link>
          <Link href="https://www.linkedin.com/in/martinsgiberts/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
          <Link href="https://www.instagram.com/mgiberts/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
          <Link href="https://www.facebook.com/mgiberts"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
        </div>
      </div>
    )
  }
}

export default App

import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        Hi there! :)<br/>
        <a href="//github.com/martins-giberts">Find me on GitHub</a>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))

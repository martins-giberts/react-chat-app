import React from 'react'
import App from './routes/App'
import Chat from './routes/Chat'
import Home from './routes/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Routes = () =>
  <Router>
    <App>
      <Route exact={true} path='/' component={Home} />
      <Route path='/chat' component={Chat} />
    </App>
  </Router>

export default Routes

import React from 'react'
import {Link} from 'react-router-dom'

const Home = () =>
  <div>
    Welcome, go to <Link to="/chat">Chat</Link><br/>
    <a href="/auth/facebook">Login with Facebook</a>
  </div>

export default Home

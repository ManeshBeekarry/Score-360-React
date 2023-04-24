import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import UserResetPassword from './views/user-reset-password'
import UserRegistration from './views/user-registration'
import UserProfileDetails from './views/user-profile-details'
import Home from './views/home'
import UserRequestResetPassword from './views/user-request-reset-password'
import UserLogin from './views/user-login'
import Standings from './views/standings'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={UserResetPassword}
          exact
          path="/user-reset-password"
        />
        <Route component={UserRegistration} exact path="/user-registration" />
        <Route
          component={UserProfileDetails}
          exact
          path="/user-profile-details"
        />
        <Route component={Home} exact path="/" />
        <Route
          component={UserRequestResetPassword}
          exact
          path="/user-request-reset-password"
        />
        <Route component={UserLogin} exact path="/user-login" />
        <Route component={Standings} exact path="/standings" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

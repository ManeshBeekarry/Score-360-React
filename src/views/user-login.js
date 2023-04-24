import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import UserLoginForm from '../components/user-login-form'
import './user-login.css'

const UserLogin = (props) => {
  return (
    <div className="user-login-container">
      <Helmet>
        <title>UserLogin - Score 360</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="UserLogin - Score 360" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="user-login-header">
        <div className="user-login-heading">
          <Navbar></Navbar>
        </div>
        <div className="user-login-hero">
          <div className="user-login-content">
            <div className="user-login-container1">
              <div className="user-login-container2">
                <h1 className="user-login-title">
                  <span>Login</span>
                  <br></br>
                </h1>
              </div>
              <div className="user-login-container3">
                <UserLoginForm rootClassName="user-login-form-root-class-name"></UserLoginForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin

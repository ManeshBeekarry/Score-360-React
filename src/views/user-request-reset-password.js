import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import UserNewPassword from '../components/user-new-password'
import './user-request-reset-password.css'

const UserRequestResetPassword = (props) => {
  return (
    <div className="user-request-reset-password-container">
      <Helmet>
        <title>UserRequestResetPassword - Score 360</title>
        <meta name="description" content="Description of the website" />
        <meta
          property="og:title"
          content="UserRequestResetPassword - Score 360"
        />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="user-request-reset-password-header">
        <div className="user-request-reset-password-heading">
          <Navbar></Navbar>
        </div>
        <div className="user-request-reset-password-hero">
          <div className="user-request-reset-password-content">
            <div className="user-request-reset-password-container1">
              <div className="user-request-reset-password-container2">
                <h1 className="user-request-reset-password-title">
                  <span>Forgotten your</span>
                  <br></br>
                  <span>password?</span>
                  <br></br>
                </h1>
              </div>
              <div className="user-request-reset-password-container3">
                <UserNewPassword rootClassName="user-new-password-root-class-name"></UserNewPassword>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRequestResetPassword

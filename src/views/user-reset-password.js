import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ResetPswForm from '../components/reset-psw-form'
import './user-reset-password.css'

const UserResetPassword = (props) => {
  return (
    <div className="user-reset-password-container">
      <Helmet>
        <title>UserResetPassword - Score 360</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="UserResetPassword - Score 360" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="user-reset-password-header">
        <div className="user-reset-password-heading">
          <Navbar></Navbar>
        </div>
        <div className="user-reset-password-hero">
          <div className="user-reset-password-content">
            <div className="user-reset-password-container1">
              <div className="user-reset-password-container2">
                <h1 className="user-reset-password-title">
                  <span>Reset Password</span>
                  <br></br>
                </h1>
              </div>
              <div className="user-reset-password-container3">
                <ResetPswForm rootClassName="reset-psw-form-root-class-name"></ResetPswForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserResetPassword

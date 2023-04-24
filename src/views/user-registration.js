import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import UserRegistrationForm from '../components/user-registration-form'
import './user-registration.css'

const UserRegistration = (props) => {
  return (
    <div className="user-registration-container">
      <Helmet>
        <title>UserRegistration - Score 360</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="UserRegistration - Score 360" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="user-registration-header">
        <div className="user-registration-heading">
          <Navbar></Navbar>
        </div>
        <div className="user-registration-hero">
          <div className="user-registration-content">
            <div className="user-registration-container1">
              <div className="user-registration-container2">
                <h1 className="user-registration-title">
                  <span>Sign Up</span>
                  <br></br>
                </h1>
              </div>
              <div className="user-registration-container3">
                <UserRegistrationForm rootClassName="user-registration-form-root-class-name"></UserRegistrationForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRegistration

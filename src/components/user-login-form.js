import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './user-login-form.css'

const UserLoginForm = (props) => {
  return (
    <div className={`user-login-form-container ${props.rootClassName} `}>
      <form className="user-login-form-user-login-form">
        <div className="user-login-form-fields-section">
          <div className="user-login-form-email-section">
            <div className="user-login-form-email-label-container">
              <label className="user-login-form-email-label">
                {props.Email}
              </label>
            </div>
            <div className="user-login-form-email-input-container">
              <input
                type="email"
                name="email"
                required
                className="user-login-form-email-input input"
              />
            </div>
          </div>
          <div className="user-login-form-password-section">
            <div className="user-login-form-password-label-section">
              <label className="user-login-form-password-label">
                {props.Password}
              </label>
            </div>
            <div className="user-login-form-password-input-section">
              <input
                type="password"
                name="password"
                required
                className="user-login-form-password-input input"
              />
            </div>
          </div>
        </div>
        <div className="user-login-form-forgot-password-section">
          <div className="user-login-form-forgot-password-container">
            <Link
              to="/user-request-reset-password"
              className="user-login-form-navlink"
            >
              <label className="user-login-form-forgot-password-link">
                Forgot Password?
              </label>
            </Link>
          </div>
        </div>
        <div className="user-login-form-login-btn-section">
          <div className="user-login-form-login-btn-container">
            <button
              id="LoginBtn"
              name="LoginBtn"
              className="user-login-form-login-btn button"
            >
              {props.LoginBtn}
            </button>
          </div>
        </div>
        <div className="user-login-form-already-account-section">
          <div className="user-login-form-already-account-container">
            <label className="user-login-form-already-account-label">
              <span className="">
                Don&apos;t have an account?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link
                to="/user-registration"
                className="user-login-form-navlink1"
              >
                Sign up
              </Link>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

UserLoginForm.defaultProps = {
  LoginBtn: 'Login',
  Password: 'Password',
  rootClassName: '',
  Email: 'Email',
}

UserLoginForm.propTypes = {
  LoginBtn: PropTypes.string,
  Password: PropTypes.string,
  rootClassName: PropTypes.string,
  Email: PropTypes.string,
}

export default UserLoginForm

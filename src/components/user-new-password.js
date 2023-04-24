import React from 'react'

import PropTypes from 'prop-types'

import './user-new-password.css'

const UserNewPassword = (props) => {
  return (
    <div className={`user-new-password-container ${props.rootClassName} `}>
      <form className="user-new-password-form">
        <div className="user-new-password-container1">
          <label className="user-new-password-text">
            Enter your email address below and we&apos;ll email you
            instructions  for setting a new one.
          </label>
        </div>
        <div className="user-new-password-container2">
          <label className="user-new-password-text1">Email</label>
        </div>
        <div className="user-new-password-container3">
          <div className="user-new-password-container4">
            <input
              type="email"
              name="email"
              required
              className="user-new-password-textinput input"
            />
          </div>
        </div>
        <div className="user-new-password-container5">
          <button
            id="LoginBtn"
            name="LoginBtn"
            className="user-new-password-button button"
          >
            {props.Send_Rst_Link}
          </button>
        </div>
      </form>
    </div>
  )
}

UserNewPassword.defaultProps = {
  rootClassName: '',
  Send_Rst_Link: 'Send Reset Link',
  Email: 'Email',
}

UserNewPassword.propTypes = {
  rootClassName: PropTypes.string,
  Send_Rst_Link: PropTypes.string,
  Email: PropTypes.string,
}

export default UserNewPassword

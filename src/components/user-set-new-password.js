import React from 'react'

import PropTypes from 'prop-types'

import './user-set-new-password.css'

const UserSetNewPassword = (props) => {
  return (
    <div className="user-set-new-password-container">
      <form className="user-set-new-password-form">
        <div className="user-set-new-password-container01">
          <div className="user-set-new-password-container02">
            <div className="user-set-new-password-container03">
              <label className="user-set-new-password-text">
                Current Password
              </label>
            </div>
            <div className="user-set-new-password-container04">
              <input
                type="password"
                id="current_password"
                name="current_password"
                required
                className="user-set-new-password-textinput input"
              />
            </div>
          </div>
          <div className="user-set-new-password-container05">
            <div className="user-set-new-password-container06">
              <label className="user-set-new-password-text1">
                New Password
              </label>
            </div>
            <div className="user-set-new-password-container07">
              <input
                type="password"
                id="new_password"
                name="new_password"
                required
                className="user-set-new-password-textinput1 input"
              />
            </div>
          </div>
          <div className="user-set-new-password-container08">
            <div className="user-set-new-password-container09">
              <label className="user-set-new-password-text2">
                Confirm New Password
              </label>
            </div>
            <div className="user-set-new-password-container10">
              <input
                type="password"
                id="confirm_new_password"
                name="confirm_new_password"
                required
                className="user-set-new-password-textinput2 input"
              />
            </div>
          </div>
        </div>
        <div className="user-set-new-password-container11">
          <div className="user-set-new-password-container12">
            <button
              id="LoginBtn"
              name="LoginBtn"
              className="user-set-new-password-button button"
            >
              {props.PSW_Submit_Btn}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

UserSetNewPassword.defaultProps = {
  rootClassName: '',
  PSW_Submit_Btn: 'Confirm New Password',
}

UserSetNewPassword.propTypes = {
  rootClassName: PropTypes.string,
  PSW_Submit_Btn: PropTypes.string,
}

export default UserSetNewPassword

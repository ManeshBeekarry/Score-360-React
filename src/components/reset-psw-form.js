import React from 'react'

import PropTypes from 'prop-types'

import './reset-psw-form.css'

const ResetPswForm = (props) => {
  return (
    <div className={`reset-psw-form-container ${props.rootClassName} `}>
      <form className="reset-psw-form-reset-ps-form">
        <div className="reset-psw-form-enter-ps-label-container">
          <label className="reset-psw-form-enter-new-password-label">
            Please enter your new password
          </label>
        </div>
        <div className="reset-psw-form-form-fields-container">
          <div className="reset-psw-form-ps-container">
            <div className="reset-psw-form-ps-label-container">
              <label className="reset-psw-form-ps-label">
                {props.Password}
              </label>
            </div>
            <div className="reset-psw-form-ps-input-container">
              <input
                type="password"
                name="password"
                required
                className="reset-psw-form-ps-input input"
              />
            </div>
          </div>
          <div className="reset-psw-form-confirm-ps-container">
            <div className="reset-psw-form-confirm-ps-label-container">
              <label className="reset-psw-form-confirm-ps-label">
                {props.Confirm_Password}
              </label>
            </div>
            <div className="reset-psw-form-confirm-ps-input-container">
              <input
                type="password"
                name="password"
                required
                className="reset-psw-form-confirm-ps-input input"
              />
            </div>
          </div>
        </div>
        <div className="reset-psw-form-submit-btn-container">
          <button
            id="LoginBtn"
            name="LoginBtn"
            className="reset-psw-form-submit-btn button"
          >
            {props.PSW_Submit_Btn}
          </button>
        </div>
      </form>
    </div>
  )
}

ResetPswForm.defaultProps = {
  Password: 'Password',
  Confirm_Password: 'Confirm Password',
  PSW_Submit_Btn: 'Submit',
  rootClassName: '',
}

ResetPswForm.propTypes = {
  Password: PropTypes.string,
  Confirm_Password: PropTypes.string,
  PSW_Submit_Btn: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ResetPswForm

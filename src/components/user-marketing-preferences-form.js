import React from 'react'

import PropTypes from 'prop-types'

import './user-marketing-preferences-form.css'

const UserMarketingPreferencesForm = (props) => {
  return (
    <div className="user-marketing-preferences-form-container">
      <form className="user-marketing-preferences-form-form">
        <div className="user-marketing-preferences-form-container1">
          <div className="user-marketing-preferences-form-container2">
            <div className="user-marketing-preferences-form-container3">
              <input
                type="checkbox"
                required
                className="user-marketing-preferences-form-checkbox"
              />
            </div>
            <div className="user-marketing-preferences-form-container4">
              <span className="user-marketing-preferences-form-text">
                Sign up for marketing.
              </span>
            </div>
          </div>
          <div className="user-marketing-preferences-form-container5">
            <div className="user-marketing-preferences-form-container6">
              <input
                type="checkbox"
                required
                className="user-marketing-preferences-form-checkbox1"
              />
            </div>
            <div className="user-marketing-preferences-form-container7">
              <span className="user-marketing-preferences-form-text1">
                Subscribe to our newsletter.
              </span>
            </div>
          </div>
        </div>
        <div className="user-marketing-preferences-form-container8">
          <button
            id="LoginBtn"
            name="LoginBtn"
            className="user-marketing-preferences-form-button button"
          >
            Update Marketing Preferences
          </button>
        </div>
      </form>
    </div>
  )
}

UserMarketingPreferencesForm.defaultProps = {
  rootClassName: '',
}

UserMarketingPreferencesForm.propTypes = {
  rootClassName: PropTypes.string,
}

export default UserMarketingPreferencesForm

import React from 'react'

import PropTypes from 'prop-types'

import './user-personal-details-form.css'

const UserPersonalDetailsForm = (props) => {
  return (
    <div className="user-personal-details-form-container">
      <form className="user-personal-details-form-form">
        <div className="user-personal-details-form-container01">
          <div className="user-personal-details-form-container02">
            <div className="user-personal-details-form-container03">
              <label className="user-personal-details-form-text">
                First Name
              </label>
            </div>
            <div className="user-personal-details-form-container04">
              <input
                type="text"
                id="First_Name"
                name="First_Name"
                required
                className="user-personal-details-form-textinput input"
              />
            </div>
          </div>
          <div className="user-personal-details-form-container05">
            <div className="user-personal-details-form-container06">
              <label className="user-personal-details-form-text1">
                Last Name
              </label>
            </div>
            <div className="user-personal-details-form-container07">
              <input
                type="text"
                id="Last_Name"
                name="Last_Name"
                required
                className="user-personal-details-form-textinput1 input"
              />
            </div>
          </div>
          <div className="user-personal-details-form-container08">
            <div className="user-personal-details-form-container09">
              <label className="user-personal-details-form-text2">
                Date of Birth
              </label>
            </div>
            <div className="user-personal-details-form-container10">
              <input
                type="date"
                id="DOB"
                name="DOB"
                disabled
                required
                className="user-personal-details-form-textinput2 input"
              />
            </div>
          </div>
          <div className="user-personal-details-form-container11">
            <div className="user-personal-details-form-container12">
              <label className="user-personal-details-form-text3">Gender</label>
            </div>
            <div className="user-personal-details-form-container13">
              <input
                type="text"
                id="Gender"
                name="Gender"
                disabled
                required
                className="user-personal-details-form-textinput3 input"
              />
            </div>
          </div>
          <div className="user-personal-details-form-container14">
            <div className="user-personal-details-form-container15">
              <label className="user-personal-details-form-text4">
                Country of Residence
              </label>
            </div>
            <div className="user-personal-details-form-container16">
              <input
                type="text"
                id="Country_Residence"
                name="Country_Residence"
                required
                autoComplete="country"
                className="user-personal-details-form-textinput4 input"
              />
            </div>
          </div>
          <div className="user-personal-details-form-container17">
            <div className="user-personal-details-form-container18">
              <label className="user-personal-details-form-profile-name">
                Profile Name
              </label>
            </div>
            <div className="user-personal-details-form-container19">
              <input
                type="text"
                id="Profile_Name"
                name="Profile_Name"
                disabled
                required
                className="user-personal-details-form-textinput5 input"
              />
            </div>
          </div>
          <div className="user-personal-details-form-container20">
            <div className="user-personal-details-form-container21">
              <label className="user-personal-details-form-text5">
                Favourite Team
              </label>
            </div>
            <div className="user-personal-details-form-container22">
              <input
                type="text"
                id="Fav_Team"
                name="Fav_Team"
                disabled
                required
                autoComplete="on"
                className="user-personal-details-form-textinput6 input"
              />
            </div>
          </div>
          <div className="user-personal-details-form-container23">
            <div className="user-personal-details-form-container24">
              <label className="user-personal-details-form-text6">Email</label>
            </div>
            <div className="user-personal-details-form-container25">
              <input
                type="email"
                name="email"
                disabled
                required
                className="user-personal-details-form-textinput7 input"
              />
            </div>
          </div>
        </div>
        <div className="user-personal-details-form-container26">
          <button
            id="LoginBtn"
            name="LoginBtn"
            className="user-personal-details-form-button button"
          >
            Update Personal Details
          </button>
        </div>
      </form>
    </div>
  )
}

UserPersonalDetailsForm.defaultProps = {
  rootClassName: '',
}

UserPersonalDetailsForm.propTypes = {
  rootClassName: PropTypes.string,
}

export default UserPersonalDetailsForm

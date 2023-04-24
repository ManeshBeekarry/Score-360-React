import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './user-registration-form.css'

const UserRegistrationForm = (props) => {
  return (
    <div className={`user-registration-form-container ${props.rootClassName} `}>
      <form className="user-registration-form-form">
        <div className="user-registration-form-container01">
          <div className="user-registration-form-container02">
            <div className="user-registration-form-container03">
              <label className="user-registration-form-text">First Name</label>
            </div>
            <div className="user-registration-form-container04">
              <input
                type="text"
                id="First_Name"
                name="First_Name"
                required
                className="user-registration-form-textinput input"
              />
            </div>
          </div>
          <div className="user-registration-form-container05">
            <div className="user-registration-form-container06">
              <label className="user-registration-form-text01">Last Name</label>
            </div>
            <div className="user-registration-form-container07">
              <input
                type="text"
                id="Last_Name"
                name="Last_Name"
                required
                className="user-registration-form-textinput1 input"
              />
            </div>
          </div>
          <div className="user-registration-form-container08">
            <div className="user-registration-form-container09">
              <label className="user-registration-form-text02">
                Date of Birth
              </label>
            </div>
            <div className="user-registration-form-container10">
              <input
                type="date"
                id="DOB"
                name="DOB"
                required
                className="user-registration-form-textinput2 input"
              />
            </div>
          </div>
          <div className="user-registration-form-container11">
            <div className="user-registration-form-container12">
              <label className="user-registration-form-text03">Gender</label>
            </div>
            <div className="user-registration-form-container13">
              <select
                id="Gender"
                name="Gender"
                required
                className="user-registration-form-select"
              >
                <option value="Male" className="">
                  Male
                </option>
                <option value="Female" className="">
                  Female
                </option>
                <option value="Unspecified" className="">
                  Unspecified
                </option>
              </select>
            </div>
          </div>
          <div className="user-registration-form-container14">
            <div className="user-registration-form-container15">
              <label className="user-registration-form-text04">
                Country of Residence
              </label>
            </div>
            <div className="user-registration-form-container16">
              <input
                type="text"
                id="Country_Residence"
                name="Country_Residence"
                required
                autoComplete="country"
                className="user-registration-form-textinput3 input"
              />
            </div>
          </div>
          <div className="user-registration-form-container17">
            <div className="user-registration-form-container18">
              <label className="user-registration-form-profile-name">
                Profile Name
              </label>
            </div>
            <div className="user-registration-form-container19">
              <input
                type="text"
                id="Profile_Name"
                name="Profile_Name"
                required
                className="user-registration-form-textinput4 input"
              />
            </div>
          </div>
          <div className="user-registration-form-container20">
            <div className="user-registration-form-container21">
              <label className="user-registration-form-text05">
                Favourite Team
              </label>
            </div>
            <div className="user-registration-form-container22">
              <input
                type="text"
                id="Fav_Team"
                name="Fav_Team"
                required
                autoComplete="on"
                className="user-registration-form-textinput5 input"
              />
            </div>
          </div>
          <div className="user-registration-form-container23">
            <div className="user-registration-form-container24">
              <label className="user-registration-form-text06">Email</label>
            </div>
            <div className="user-registration-form-container25">
              <input
                type="email"
                name="email"
                required
                className="user-registration-form-textinput6 input"
              />
            </div>
          </div>
          <div className="user-registration-form-container26">
            <div className="user-registration-form-container27">
              <label className="user-registration-form-text07">Password</label>
            </div>
            <div className="user-registration-form-container28">
              <input
                type="password"
                name="password"
                required
                className="user-registration-form-textinput7 input"
              />
            </div>
          </div>
          <div className="user-registration-form-container29">
            <div className="user-registration-form-container30">
              <label className="user-registration-form-text08">
                Confirm Password
              </label>
            </div>
            <div className="user-registration-form-container31">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                required
                className="user-registration-form-textinput8 input"
              />
            </div>
          </div>
          <div className="user-registration-form-container32">
            <div className="user-registration-form-container33">
              <input
                type="checkbox"
                required
                className="user-registration-form-checkbox"
              />
            </div>
            <div className="user-registration-form-container34">
              <span className="user-registration-form-text09">
                In order to register an account, I understand that I am required
                to adhere to the Terms and Conditions and Privacy Policy.
              </span>
            </div>
          </div>
          <div className="user-registration-form-container35">
            <div className="user-registration-form-container36">
              <input
                type="checkbox"
                required
                className="user-registration-form-checkbox1"
              />
            </div>
            <div className="user-registration-form-container37">
              <span className="user-registration-form-text10">
                Sign up for marketing.
              </span>
            </div>
          </div>
          <div className="user-registration-form-container38">
            <div className="user-registration-form-container39">
              <input
                type="checkbox"
                required
                className="user-registration-form-checkbox2"
              />
            </div>
            <div className="user-registration-form-container40">
              <span className="user-registration-form-text11">
                Subscribe to our newsletter.
              </span>
            </div>
          </div>
        </div>
        <div className="user-registration-form-container41">
          <div className="user-registration-form-container42">
            <button
              id="LoginBtn"
              name="LoginBtn"
              className="user-registration-form-button button"
            >
              {props.SignUpBtn}
            </button>
          </div>
        </div>
        <div className="user-registration-form-container43">
          <div className="user-registration-form-container44">
            <label className="user-registration-form-label">
              <span className="">
                Already have an account?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link to="/user-login" className="user-registration-form-navlink">
                Login
              </Link>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

UserRegistrationForm.defaultProps = {
  rootClassName: '',
  SignUpBtn: 'Sign Up',
}

UserRegistrationForm.propTypes = {
  rootClassName: PropTypes.string,
  SignUpBtn: PropTypes.string,
}

export default UserRegistrationForm

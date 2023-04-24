import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './user-profile-details.css'

const UserProfileDetails = (props) => {
  return (
    <div className="user-profile-details-container">
      <Helmet>
        <title>UserProfileDetails - Score 360</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="UserProfileDetails - Score 360" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="user-profile-details-header">
        <div className="user-profile-details-heading">
          <Navbar></Navbar>
        </div>
        <div className="user-profile-details-hero">
          <div className="user-profile-details-content">
            <div className="user-profile-details-container01">
              <div className="user-profile-details-container02">
                <h1 className="user-profile-details-title">
                  <span>Your Account</span>
                  <br></br>
                </h1>
              </div>
              <div className="user-profile-details-container03">
                <div className="user-profile-details-container04">
                  <div className="user-profile-details-div">
                    <DangerousHTML
                      html={`<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
</p>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-profile-details-header1">
        <div className="user-profile-details-hero1">
          <div className="user-profile-details-content1">
            <div className="user-profile-details-container05">
              <div className="user-profile-details-container06">
                <h1 className="user-profile-details-title1">
                  <span>Global League Admin</span>
                  <br></br>
                </h1>
              </div>
              <div className="user-profile-details-container07">
                <div className="user-profile-details-container08">
                  <div className="user-profile-details-div1">
                    <DangerousHTML
                      html={`<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
</p>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-profile-details-header2">
        <div className="user-profile-details-heading1">
          <Navbar></Navbar>
        </div>
        <div className="user-profile-details-hero2">
          <div className="user-profile-details-content2">
            <div className="user-profile-details-container09">
              <div className="user-profile-details-container10">
                <h1 className="user-profile-details-title2">
                  <span>Mini League Admin</span>
                  <br></br>
                </h1>
              </div>
              <div className="user-profile-details-container11">
                <div className="user-profile-details-container12">
                  <div className="user-profile-details-div2">
                    <DangerousHTML
                      html={`<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
</p>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileDetails

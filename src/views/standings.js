import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './standings.css'

const Standings = (props) => {
  return (
    <div className="standings-container">
      <Helmet>
        <title>Standings - Score 360</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Standings - Score 360" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="standings-header">
        <div className="standings-heading">
          <Navbar></Navbar>
        </div>
        <div className="standings-hero">
          <div className="standings-content">
            <div className="standings-container1">
              <div className="standings-container2">
                <h1 className="standings-title">
                  <span>Global League Standings</span>
                  <br></br>
                </h1>
              </div>
              <div className="standings-container3">
                <div className="standings-container4">
                  <div className="standings-div">
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
      <div className="standings-header1">
        <div className="standings-hero1">
          <div className="standings-content1">
            <div className="standings-container5">
              <div className="standings-container6">
                <h1 className="standings-title1">
                  <span>Mini League Standings</span>
                  <br></br>
                </h1>
              </div>
              <div className="standings-container7">
                <div className="standings-container8">
                  <div className="standings-div1">
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

export default Standings

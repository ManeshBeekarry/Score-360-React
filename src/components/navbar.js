import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar-navbar">
      <div className="navbar-desktop">
        <h1 className="navbar-text">{props.heading}</h1>
        <div className="navbar-container">
          <div className="navbar-links">
            <a href="#HowToPlay" className="navbar-how-to-play link">
              {props.Link_1}
            </a>
            <Link to="/" className="navbar-predictions link">
              {props.Link_2}
            </Link>
            <Link to="/" className="navbar-standings link">
              {props.Link_3}
            </Link>
          </div>
        </div>
        <div className="navbar-quick-actions">
          <Link to="/user-login" className="navbar-navlink">
            <div id="LoginBtn" className="navbar-login-btn">
              <span className="navbar-login">
                <span>Login</span>
                <br></br>
              </span>
            </div>
          </Link>
          <Link to="/user-registration" className="navbar-navlink1">
            <div className="navbar-sign-up-btn">
              <span className="navbar-sign-up">Sign up</span>
            </div>
          </Link>
          <img
            id="open-mobile-menu"
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="navbar-hamburger-menu"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile">
        <div className="navbar-top">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
          <svg
            id="close-mobile-menu"
            viewBox="0 0 1024 1024"
            className="navbar-icon"
          >
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
        <div className="navbar-links1">
          <Link to="/" className="navbar-link">
            {props.text1}
          </Link>
          <Link to="/" className="navbar-navlink2">
            {props.text}
          </Link>
          <Link to="/" className="navbar-navlink3">
            {props.text12}
          </Link>
          <Link to="/standings" className="navbar-link1">
            {props.text13}
          </Link>
          <div className="navbar-buttons">
            <Link to="/user-login" className="navbar-navlink4">
              <div className="navbar-btn">
                <span className="navbar-text3">{props.text131}</span>
              </div>
            </Link>
            <Link to="/user-registration" className="navbar-navlink5">
              <div className="navbar-btn1">
                <span className="navbar-text4">{props.text1311}</span>
              </div>
            </Link>
            <Link to="/user-registration" className="navbar-navlink6">
              <div className="navbar-btn2">
                <span className="navbar-text5">{props.text13112}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
        ></DangerousHTML>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Link_3: 'Standings',
  heading: 'Score 360',
  text1: 'How To Play',
  text12: 'Standings',
  Link_1: 'How To Play',
  text131: 'Login',
  image_alt: 'image',
  pastedImage_src: '/playground_assets/pastedimage-8o98.svg',
  text1311: 'Sign up',
  text13: 'User Profile Details',
  Link_2: 'Predictions',
  text13111: 'Sign up NEw',
  pastedImage_alt: 'pastedImage',
  text: 'Predictions',
  image_src: '/playground_assets/pastedimage-cx4wqj.svg',
  text13112: 'Log Out',
}

Navbar.propTypes = {
  Link_3: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  Link_2: PropTypes.string,
  text13111: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  text13112: PropTypes.string,
}

export default Navbar

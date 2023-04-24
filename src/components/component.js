import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <form className="component-form">
        <div className="component-container1">
          <div className="component-container2">
            <label className="component-text">{props.text}</label>
          </div>
          <div className="component-container3">
            <input type="text" className="component-textinput input" />
          </div>
        </div>
        <div className="component-container4">
          <div className="component-container5">
            <label className="component-text1">{props.text1}</label>
          </div>
          <div className="component-container6">
            <input type="text" className="component-textinput1 input" />
          </div>
        </div>
      </form>
    </div>
  )
}

AppComponent.defaultProps = {
  text1: 'Label',
  text: 'Label',
}

AppComponent.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default AppComponent

import React from 'react'

import PropTypes from 'prop-types'

import './how-to-play-mini-league.css'

const HowToPlayMiniLeague = (props) => {
  return (
    <div
      className={`how-to-play-mini-league-feature-card ${props.rootClassName} `}
    >
      <div className="how-to-play-mini-league-ht-mini-league-container">
        <div className="how-to-play-mini-league-container">
          <h2 className="how-to-play-mini-league-heading">{props.title}</h2>
          <div className="how-to-play-mini-league-container1">
            <span className="">{props.description}</span>
            <span className="">{props.description11}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HowToPlayMiniLeague.defaultProps = {
  rootClassName: '',
  description11: '• You can join up to 5 guest mini leagues.',
  description1: '• Predictions are determined within normal time.',
  title: 'Mini League',
  description: '• You can create up to 2 mini leagues.',
}

HowToPlayMiniLeague.propTypes = {
  rootClassName: PropTypes.string,
  description11: PropTypes.string,
  description1: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default HowToPlayMiniLeague

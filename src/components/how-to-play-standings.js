import React from 'react'

import PropTypes from 'prop-types'

import './how-to-play-standings.css'

const HowToPlayStandings = (props) => {
  return (
    <div
      className={`how-to-play-standings-feature-card ${props.rootClassName} `}
    >
      <div className="how-to-play-standings-ht-standings-container">
        <div className="how-to-play-standings-container">
          <h2 className="how-to-play-standings-heading">{props.title}</h2>
          <div className="how-to-play-standings-container1">
            <span className="">{props.description}</span>
            <span className="">{props.description2}</span>
            <span className="">{props.description11}</span>
            <span className="">{props.description1}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HowToPlayStandings.defaultProps = {
  title: 'Standings',
  description2: '• highest points',
  rootClassName: '',
  description1: '• points in the last gameweek',
  description: 'All punters are ranked in the following order:',
  description11: '• most correct scorelines',
}

HowToPlayStandings.propTypes = {
  title: PropTypes.string,
  description2: PropTypes.string,
  rootClassName: PropTypes.string,
  description1: PropTypes.string,
  description: PropTypes.string,
  description11: PropTypes.string,
}

export default HowToPlayStandings

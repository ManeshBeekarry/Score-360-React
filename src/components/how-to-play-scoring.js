import React from 'react'

import PropTypes from 'prop-types'

import './how-to-play-scoring.css'

const HowToPlayScoring = (props) => {
  return (
    <div className={`how-to-play-scoring-feature-card ${props.rootClassName} `}>
      <div className="how-to-play-scoring-ht-scoring-container">
        <div className="how-to-play-scoring-container">
          <h2 className="how-to-play-scoring-heading">{props.title}</h2>
          <div className="how-to-play-scoring-container1">
            <span className="">{props.description}</span>
            <span className="">{props.description11}</span>
            <span className="">{props.description1}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HowToPlayScoring.defaultProps = {
  description1: '• Predictions are determined within normal time.',
  description: '• 3 points for predicting the correct scoreline',
  title: 'Scoring',
  description11:
    '• 1 point for predicting the correct outcome (home win, away win or draw)',
  rootClassName: '',
}

HowToPlayScoring.propTypes = {
  description1: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  description11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HowToPlayScoring

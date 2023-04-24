import React from 'react'

import PropTypes from 'prop-types'

import './how-to-play-predictions-deadline.css'

const HowToPlayPredictionsDeadline = (props) => {
  return (
    <div
      className={`how-to-play-predictions-deadline-feature-card ${props.rootClassName} `}
    >
      <div className="how-to-play-predictions-deadline-ht-preds-deadline-container">
        <div className="how-to-play-predictions-deadline-container">
          <h2 className="how-to-play-predictions-deadline-heading">
            {props.title}
          </h2>
          <div className="how-to-play-predictions-deadline-container1">
            <span className="">{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HowToPlayPredictionsDeadline.defaultProps = {
  description1: '• Predictions are determined within normal time.',
  description11:
    '• 1 point for predicting the correct outcome (home win, away win or draw)',
  rootClassName: '',
  title: 'Predictions Deadline',
  description:
    '• You can enter or edit your predictions any time prior to 1 hour before the first match in the gameweek.',
}

HowToPlayPredictionsDeadline.propTypes = {
  description1: PropTypes.string,
  description11: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default HowToPlayPredictionsDeadline

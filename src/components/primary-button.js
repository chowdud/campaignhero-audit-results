import React from 'react'

import PropTypes from 'prop-types'

import './primary-button.css'

const PrimaryButton = (props) => {
  return (
    <div className="primary-button-container">
      <button className="primary-button-button mediumLabel button">
        {props.button}
      </button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  button: 'Button',
  buttonColor: 'Button',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
  buttonColor: PropTypes.string,
}

export default PrimaryButton
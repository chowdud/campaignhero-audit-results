import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <span className="component1-c-t-a-title">{props.CTA - Title}</span>
      <span className="component1-c-t-a-subtitle">{props.CTA - Subtitle}</span>
    </div>
  )
}

Component1.defaultProps = {
  'CTA-Subtitle': 'Subtitle',
  'CTA-Title': 'Title',
}

Component1.propTypes = {
  'CTA-Subtitle': PropTypes.string,
  'CTA-Title': PropTypes.string,
}

export default Component1

import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links10.css'

const NavigationLinks10 = (props) => {
  return (
    <nav className={`navigation-links10-nav ${props.rootClassName} `}>
      <span className="navigation-links10-text">{props.text}</span>
      <span className="navigation-links10-text1">{props.text1}</span>
      <span className="navigation-links10-text2">{props.text2}</span>
      <span className="navigation-links10-text3">{props.text3}</span>
      <span className="navigation-links10-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks10.defaultProps = {
  text: 'About',
  rootClassName: '',
  text4: 'Blog',
  text3: 'Team',
  text2: 'Pricing',
  text1: 'Features',
}

NavigationLinks10.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks10

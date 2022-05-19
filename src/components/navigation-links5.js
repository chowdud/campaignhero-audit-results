import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links5.css'

const NavigationLinks5 = (props) => {
  return (
    <nav className={`navigation-links5-nav ${props.rootClassName} `}>
      <span className="navigation-links5-text">{props.text}</span>
      <span className="navigation-links5-text1">{props.text1}</span>
      <span className="navigation-links5-text2">{props.text2}</span>
      <span className="navigation-links5-text3">{props.text3}</span>
      <span className="navigation-links5-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks5.defaultProps = {
  rootClassName: '',
  text1: 'Features',
  text2: 'Pricing',
  text: 'About',
  text3: 'Team',
  text4: 'Blog',
}

NavigationLinks5.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks5

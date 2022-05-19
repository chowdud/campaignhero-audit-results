import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links13.css'

const NavigationLinks13 = (props) => {
  return (
    <nav className={`navigation-links13-nav ${props.rootClassName} `}>
      <span className="navigation-links13-text">{props.text}</span>
      <span className="navigation-links13-text1">{props.text1}</span>
      <span className="navigation-links13-text2">{props.text2}</span>
      <span className="navigation-links13-text3">{props.text3}</span>
      <span className="navigation-links13-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks13.defaultProps = {
  text3: 'Team',
  text2: 'Pricing',
  text1: 'Features',
  text: 'About',
  text4: 'Blog',
  rootClassName: '',
}

NavigationLinks13.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks13

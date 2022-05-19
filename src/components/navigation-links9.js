import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links9.css'

const NavigationLinks9 = (props) => {
  return (
    <nav className={`navigation-links9-nav ${props.rootClassName} `}>
      <span className="navigation-links9-text">{props.text}</span>
      <span className="navigation-links9-text1">{props.text1}</span>
      <span className="navigation-links9-text2">{props.text2}</span>
      <span className="navigation-links9-text3">{props.text3}</span>
      <span className="navigation-links9-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks9.defaultProps = {
  rootClassName: '',
  text2: 'Pricing',
  text1: 'Features',
  text4: 'Blog',
  text3: 'Team',
  text: 'About',
}

NavigationLinks9.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks9

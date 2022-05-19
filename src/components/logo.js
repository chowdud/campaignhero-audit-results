import React from 'react'

import PropTypes from 'prop-types'

import './logo.css'

const Logo = (props) => {
  return (
    <div className="logo-logo">
      <img alt={props.image_alt} src={props.image_src} className="logo-image" />
    </div>
  )
}

Logo.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/logotype-dark.svg',
}

Logo.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Logo

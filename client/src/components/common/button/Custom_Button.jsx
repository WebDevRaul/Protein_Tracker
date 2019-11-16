import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';

const CustomButton = ({ text, isClass, onClick, isLoading, type }) => {
  return (
    <button className={`btn ${isClass}`} type={type} onClick={onClick}>
      {isLoading ? <Spinner /> : text}
    </button>
  )
}

CustomButton.defaultProps = {
  type: 'button'
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
}

export default CustomButton;
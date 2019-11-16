import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Spinner from '../spinner/Spinner';

const CustomButton = ({ text, isClass, onClick, isLoading, type }) => {
  return (
    <button 
      className={classnames(`btn ${isClass}`, { 'p-0': isLoading })} 
      style={{ minHeight: '50px', minWidth: '125px' }}
      type={type} 
      onClick={onClick}
    >
      <div>{isLoading ? <Spinner /> : text}</div>
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
  isLoading: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default CustomButton;
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Spinner from '../spinner/Spinner';

const CustomButton = ({ text, isClass, onClick, isLoading, type }) => {
  return (
    <button 
      className={classnames(`btn mr-1 ${isClass}`, { 'p-0': isLoading })}
      type={type} 
      onClick={onClick}
    >
      <div>{isLoading ? <Spinner isClass='spinner' /> : <p className='mb-0'>{text}</p>}</div>
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
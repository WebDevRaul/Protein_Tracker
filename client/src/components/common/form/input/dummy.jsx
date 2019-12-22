import React from 'react';
import PropTypes from 'prop-types';


const Dummy = ({ text, name, value, placeholder }) => {
  return (
    <div className='form-group'>
      <div className='input-group'>
      <div>{text}</div>
        <input
          className='form-control mr-1 ml-1 form-control-lg' 
          name={name}
          value={value}
          autoComplete='off'
          required
          disabled
          placeholder={placeholder}
          type='text'
        />
      </div>
    </div>
  );
};

Dummy.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Dummy.defaultProps = {
  type: 'text'
};

export default Dummy;
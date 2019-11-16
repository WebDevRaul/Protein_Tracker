import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const Input = ({ name, value, label, icon, type, error, onChange}) => {
  return (
    <div className='form-group'>
      <label className={classnames('', { 'text-danger': error })} htmlFor={name} >
        { error ? error: label }
      </label>
      <div className='input-group'>
        <div className="input-group-prepend">
          <div className="input-group-text"><i className={icon}></i></div>
        </div>
        <input
          type={type}
          className={classnames('form-control form-control-lg', {'is-invalid' : error})}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const Select = ({ name, value, label, error, onChange, onFocus}) => {
  return (
    <div className='form-group'>
      <label 
        style={{ fontSize: '.8em' }}
        className={classnames('ml-1 mb-0 text-primary', { 'text-danger': error })} 
        htmlFor={name} 
        >
        { error ? error: label }
      </label>
      <div className='input-group'>
        <select 
          name={name}
          className={classnames('custom-select mr-1 ml-1', {'is-invalid' : error})} 
          style={{ height: '48px' }}
          onChange={onChange}
          onFocus={onFocus}
        >
          <option defaultValue value=''>Choose...</option>
          { value.map(({ key, value }) => <option key={value} value={value}>{key}</option>) }
        </select>
      </div>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default Select;
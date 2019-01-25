import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const TextFieldGroup = ({
  text,
  name,
  icon,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{text}</label>
      <div className='input-group'>
        <div className="input-group-prepend">
          <div className="input-group-text"><i className={icon}></i></div>
        </div>
        <input
          type={type}
          className={classnames('form-control form-control-lg', {'is-invalid' : error})}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {info && <small classNam='form-text text-muted' >{info}</small>}
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
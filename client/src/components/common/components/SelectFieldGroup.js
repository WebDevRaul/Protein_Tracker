import React from 'react';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  onChange
}) => {
  return (
    <div class="input-group">
      <select class="custom-select"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="input-group-append">
        <label class="input-group-text" htmlFor={name}>Add</label>
      </div>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectListGroup;
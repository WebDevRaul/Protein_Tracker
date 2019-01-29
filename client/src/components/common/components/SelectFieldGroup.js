import React from 'react';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  onChange,
  items,
}) => {
  // const selectOptions = items.map(option => (
  //   <option key={option.label} value={option.value}>
  //     {option.label}
  //   </option>
  // ));
  console.log(items)
  return (
    <div className="input-group">
      <select className="custom-select"
        name={name}
        value={value}
        onChange={onChange}
      >
        {/* {selectOptions} */}
      </select>
      <div className="input-group-append">
        <label className="input-group-text" htmlFor={name}>Add</label>
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
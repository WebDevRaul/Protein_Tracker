import React from 'react';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  onChange,
  items,
  onClick,
  option,
}) => {
  const selectOptions = items.map(item => (
    <option key={item._id} value={item.product_name} >
      {item.product_name}
    </option>
  ));
  return (
    <div className="input-group">
      <select className="custom-select"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option>{option}</option>
        {selectOptions}
      </select>
      <div className="input-group-append">
        <label 
          className="input-group-text" 
          htmlFor={name}
          onClick={onClick}
        >Add
        </label>
      </div>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired
};

export default SelectListGroup;
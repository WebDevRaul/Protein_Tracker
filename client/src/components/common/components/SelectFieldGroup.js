import React from 'react';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  onChange,
  items,
}) => {
  const selectOptions = items.items.map(item => (
    <option key={item._id} value={item.product_name}>
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
        {selectOptions}
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
  onChange: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

export default SelectListGroup;
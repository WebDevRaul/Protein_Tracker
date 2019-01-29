import React from 'react';
import PropTypes from 'prop-types';


const TableFieldGroup = ({
  quantity,
  product,
  calories,
  proteins,
  fat,
  carbohydrates,
}) => {
  return (
    <ul className='navbar list-inline'>
      <li className='list-inline-item'>{quantity}</li>
      <li className='list-inline-item'>{product}</li>
      <li className='list-inline-item'>{calories}</li>
      <li className='list-inline-item'>{proteins}</li>
      <li className='list-inline-item'>{fat}</li>
      <li className='list-inline-item'>{carbohydrates}</li>
    </ul>
  );
};

TableFieldGroup.propTypes = {
  quantity: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
  proteins: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.string.isRequired
};

export default TableFieldGroup;
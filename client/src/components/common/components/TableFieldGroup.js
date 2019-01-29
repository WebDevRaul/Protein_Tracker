import React from 'react';
import PropTypes from 'prop-types';


const TableFieldGroup = ({
  text,
}) => {
  return (
    <ul className='navbar list-inline'>
      <li className='list-inline-item'>1</li>
      <li className='list-inline-item'>2</li>
      <li className='list-inline-item'>3</li>
      <li className='list-inline-item'>4</li>
      <li className='list-inline-item'>5</li>
      <li className='list-inline-item'>6</li>
    </ul>
  );
};

TableFieldGroup.propTypes = {
  text: PropTypes.string,
};

export default TableFieldGroup;
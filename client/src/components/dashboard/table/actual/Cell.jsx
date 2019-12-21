import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ value, title }) => {
  return (
    <div className='target-cell position-relative w-25 d-flex flex-column align-items-center border border-success rounded mr-1 ml-1 text-success bg-white'>
      <p className='mb-0 p-2 font-weight-bold bg-white border border-success rounded position-absolute shadow text-center' style={{ top: '-19px', minWidth: '55px' }}>{title}</p>
      <h5 className='mt-4 pt-2 pb-1'>{value}</h5>
    </div>
  )
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Cell;
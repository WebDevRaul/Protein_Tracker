import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ value }) => {
  return (
    <div className='actual-cell w-25 d-flex flex-column align-items-center border border-success rounded mr-1 ml-1 text-success p-2 bg-white'>
      <h5 className='mb-0'>{value}</h5>
    </div>
  )
}

Cell.propTypes = {
  value: PropTypes.string.isRequired
}

export default Cell;
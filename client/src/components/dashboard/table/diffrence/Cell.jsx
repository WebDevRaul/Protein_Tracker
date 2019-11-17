import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ value }) => {
  return (
    <div className='w-25 d-flex flex-column align-items-center border border-primary rounded mr-1 ml-1 text-danger p-2'>
      <h5 className='mb-0'>{value}</h5>
    </div>
  )
}

Cell.propTypes = {
  value: PropTypes.string.isRequired
}

export default Cell;
import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ title, value }) => {
  return (
    <div className='w-25 d-flex flex-column align-items-center border border-primary rounded mr-1 ml-1 text-primary'>
      <h5 className='p-2 border border-primary rounded position-absolute bg-white shadow' style={{ top: '-22px' }}>{title}</h5>
      <h4 className='mt-4 pt-3 mb-4'>{value}</h4>
    </div>
  )
}

Cell.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Cell;
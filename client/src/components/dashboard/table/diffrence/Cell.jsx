import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Cell = ({ value }) => {
  const negative = Math.sign(value) === -1 ? true : false
  return (
    <div className={
      classnames('diffrence-cell w-25 d-flex flex-column align-items-center border border-primary rounded mr-1 ml-1 text-danger p-2', { 'text-light border-danger bg-danger': negative, 'bg-white': !negative })
    }>
      <h5 className='mb-0'>{value}</h5>
    </div>
  )
}

Cell.propTypes = {
  value: PropTypes.string.isRequired
}

export default Cell;
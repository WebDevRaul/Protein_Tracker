import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Cell = ({ value, title }) => {
  const negative = Math.sign(value) === -1 ? true : false;
  return (
    <div className={classnames('target-cell position-relative w-25 d-flex flex-column align-items-center border border-warning rounded mr-1 ml-1 text-danger', {'text-light border-danger bg-danger': negative, 'bg-white': !negative })}>
      <p className='mb-0 p-2 font-weight-bold bg-white border border-warning rounded position-absolute shadow text-center text-danger' style={{ top: '-19px', minWidth: '55px' }}>{title}</p>
      <h5 className='mt-4 pt-2 pb-1'>{value}</h5>
    </div>
  )
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Cell;
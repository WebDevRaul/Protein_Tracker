import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Diffrence = ({ cal, prot, fat, carb  }) => {
  return (
    <div className='d-flex mb-2'>
      <Cell value={cal} />
      <Cell value={prot} />
      <Cell value={fat} />
      <Cell value={carb} />
    </div>
  )
}

Diffrence.propTypes = {
  cal: PropTypes.string.isRequired,
  prot: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carb: PropTypes.string.isRequired
}

export default Diffrence
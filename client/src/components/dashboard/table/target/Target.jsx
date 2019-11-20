import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Target = ({ cal, prot, fat, carb, set }) => {
  return (
    <div className='target d-flex'>
      <Cell title='Cal.' value={cal} />
      <Cell title='Prot.' value={prot} />
      <Cell title='Fat' value={fat} />
      <Cell title='Carb.' value={carb} />
    </div>
  )
}

Target.propTypes = {
  cal: PropTypes.string.isRequired,
  prot: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carb: PropTypes.string.isRequired
}

export default Target;
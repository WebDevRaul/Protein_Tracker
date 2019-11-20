import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Target = ({ cal, prot, fat, carb }) => {
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
  cal: PropTypes.string,
  prot: PropTypes.string,
  fat: PropTypes.string,
  carb: PropTypes.string
}

export default Target;
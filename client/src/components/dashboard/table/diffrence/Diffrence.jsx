import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Diffrence = () => {
  return (
    <div className='d-flex mb-2'>
      <Cell value='100' />
      <Cell value='100' />
      <Cell value='100' />
      <Cell value='100' />
    </div>
  )
}

Diffrence.propTypes = {

}

export default Diffrence
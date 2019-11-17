import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Actual = () => {
  return (
    <div className='d-flex mb-2'>
      <Cell value='100' />
      <Cell value='100' />
      <Cell value='100' />
      <Cell value='100' />
    </div>
  )
}

Actual.propTypes = {

}

export default Actual;
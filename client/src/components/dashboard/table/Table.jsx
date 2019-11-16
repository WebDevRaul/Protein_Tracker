import React from 'react';
import PropTypes from 'prop-types';

import Target from './Target';
import Form from './Form';
import Actual from './Actual';
import Diffrence from './Diffrence';

import './table.css';

const Table = () => {
  return (
    <div className='row no-gutters mt-5'>
      <div className='col-11 col-sm-9 m-auto'>
        <Target />
        <Form />
        <Actual />
        <Diffrence />
      </div>
    </div>
  )
}

Table.propTypes = {

}

export default Table;
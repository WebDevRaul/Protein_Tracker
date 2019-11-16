import React from 'react';
import PropTypes from 'prop-types';

import Target from './target/Target';
import Form from './form/Form';
import Actual from './actual/Actual';
import Diffrence from './diffrence/Diffrence';

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
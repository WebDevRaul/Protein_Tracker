import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_target } from '../../../redux/selectors/user';

import Target from './target/Target';
import Form from './form/Form';
import Actual from './actual/Actual';
import Diffrence from './diffrence/Diffrence';

import './table.css';

const Table = ({ target }) => {
  return (
    <div className='row no-gutters mt-5'>
      <div className='col-11 col-sm-9 m-auto'>
        <Target target={target} />
        <Form />
        <Actual />
        <Diffrence />
      </div>
    </div>
  )
}

Table.propTypes = {
  target: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  target: state_target
});

export default connect( mapStateToProps, null )(Table);
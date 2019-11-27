import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_set_isLoading } from '../../../../redux/selectors/target';

const Cell = ({ title, value, set_isLoading }) => {
  return (
    <div className='target-cell w-25 d-flex flex-column align-items-center border border-secondary rounded bg-white mr-1 ml-1 text-primary'>
      <p className='mb-0 p-2 font-weight-bold border border-secondary rounded position-absolute bg-white shadow text-center text-secondary ' style={{ top: '-19px', minWidth: '55px' }}>{title}</p>
      <h5 className={classnames('mt-4 pt-3 mb-4', { 'blinking': set_isLoading })}>{value}</h5>
    </div>
  )
}

Cell.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  set_isLoading: PropTypes.bool.isRequired
};

const mapStateToProps=createStructuredSelector({
  set_isLoading: state_set_isLoading
});

export default connect( mapStateToProps, null )(Cell);
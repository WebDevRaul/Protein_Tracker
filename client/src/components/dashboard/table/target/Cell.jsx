import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_set_isLoading } from '../../../../redux/selectors/target';

const Cell = ({ title, value, set_isLoading }) => {
  return (
    <div className='w-25 d-flex flex-column align-items-center border border-primary rounded mr-1 ml-1 text-primary'>
      <h5 className='p-2 border border-primary rounded position-absolute bg-white shadow' style={{ top: '-22px' }}>{title}</h5>
      <h4 className={classnames('mt-4 pt-3 mb-4', { 'blinking': set_isLoading })}>{value}</h4>
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
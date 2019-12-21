import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_target } from '../../../redux/selectors/target';
import { state_breakfast, state_lunch, state_dinner, state_snack } from '../../../redux/selectors/meal';

import Target from './target/Target';
import Form from './form/Form';
import Actual from './actual/Actual';
import Diffrence from './diffrence/Diffrence';
import doTheCalc from './utils/doTheCalc';


import './responsive.css';

const Table = ({ target, breakfast, lunch, dinner, snack }) => {
  const [state, setState] = useState({ 
    actual: { cal: '0', prot: '0', fat: '0', carb: '0' }, 
    diffrence: { cal: '0', prot: '0', fat: '0', carb: '0' }
  });
  const { actual, diffrence } = state;

  // Update State CDU
  useEffect(() => {
    const { actual, diffrence } = doTheCalc(target, breakfast, lunch, dinner, snack);
    setState({ ...state, actual, diffrence });
    // eslint-disable-next-line
  },[target, breakfast, lunch, dinner, snack])

  return (
    <div className='row no-gutters mt-5'>
      <div className='col-11 col-md-9 col-lg-8 m-auto'>
        <Target {...target} />
        <Form />
        <Actual { ...actual } />
        <Diffrence { ...diffrence } />
      </div>
    </div>
  )
}

Table.propTypes = {
  target: PropTypes.object.isRequired,
  breakfast: PropTypes.array.isRequired,
  lunch: PropTypes.array.isRequired,
  dinner: PropTypes.array.isRequired,
  snack: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  target: state_target,
  breakfast: state_breakfast,
  lunch: state_lunch,
  dinner: state_dinner,
  snack: state_snack
});

export default connect( mapStateToProps, null )(Table);
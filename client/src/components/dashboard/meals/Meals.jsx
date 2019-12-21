import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAll } from '../../../redux/actions/meal';
import { createStructuredSelector } from 'reselect';
import { state_breakfast, state_lunch, state_dinner, state_snack } from '../../../redux/selectors/meal';

import Card from './Card';
import SelectCard from './Select_Card';
import ClearAll from './Clear_All';
import isEmpty from '../../common/utils/isEmpty';

import './responsive.css';

const Meals = ({ breakfast, lunch, dinner, snack, clearAll }) => {
  const [state, setState] = useState({ Breakfast: false, Lunch: false, Dinner: false, Snack: false });
  const { Breakfast, Lunch, Dinner, Snack } = state;

  // Update State CDU
  useEffect(() => {
    let updates = {};
    if (!isEmpty(breakfast)) updates.Breakfast = true;
    if (!isEmpty(lunch)) updates.Lunch = true;
    if (!isEmpty(dinner)) updates.Dinner = true;
    if (!isEmpty(snack)) updates.Snack = true;
  
    setState({ ...state, ...updates });
    // eslint-disable-next-line
  }, [breakfast, lunch, dinner, snack]);

  return (
    <div className='row no-gutters'>
      <div className='col-11 col-md-9 col-lg-8 m-auto'>
        <SelectCard state={state} setState={setState} onClear={() => clearAll()} />
        { Breakfast && 
          <Card 
            title='Breakfast' 
            state={state} 
            setState={setState}
            items={breakfast}
          /> 
        }
        { Lunch && 
          <Card 
            title='Lunch' 
            state={state} 
            setState={setState} 
            items={lunch}
          /> 
        }
        { Dinner && 
          <Card 
            title='Dinner' 
            state={state} 
            setState={setState}
            items={dinner}
          />
        }
        { Snack && 
          <Card 
            title='Snack' 
            state={state} 
            setState={setState}
            items={snack}
          />
        }
        <ClearAll state={state} setState={setState} onClear={() => clearAll()} />
      </div>
    </div>
  )
}

Meals.propTypes = {
  breakfast: PropTypes.array.isRequired,
  lunch: PropTypes.array.isRequired,
  dinner: PropTypes.array.isRequired,
  snack: PropTypes.array.isRequired,
  clearAll: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  breakfast: state_breakfast,
  lunch: state_lunch,
  dinner: state_dinner,
  snack: state_snack
});

export default connect(mapStateToProps, { clearAll })(Meals);
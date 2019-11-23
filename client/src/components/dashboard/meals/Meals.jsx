import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_breakfast, state_lunch, state_diner, state_snack } from '../../../redux/selectors/meal';

import Card from './Card';
import Buttons from './Buttons';
import isEmpty from '../../common/utils/isEmpty';

const Meals = ({ breakfast, lunch, diner, snack }) => {
  const [state, setState] = useState({ Breakfast: false, Lunch: false, Diner: false, Snack: false });
  const { Breakfast, Lunch, Diner, Snack } = state;

  // Update State CDU
  useEffect(() => {
    let updates = {};
    if (!isEmpty(breakfast)) updates.Breakfast = true;
    if (!isEmpty(lunch)) updates.Lunch = true;
    if (!isEmpty(diner)) updates.Diner = true;
    if (!isEmpty(snack)) updates.Snack = true;
  
    setState({ ...state, ...updates });
    // eslint-disable-next-line
  }, [breakfast, lunch, diner, snack]);

  return (
    <div className='row no-gutters'>
      <div className='col-9 m-auto'>
        <Buttons state={state} setState={setState} />
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
        { Diner && 
          <Card 
            title='Diner' 
            state={state} 
            setState={setState}
            items={diner}
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
      </div>
    </div>
  )
}

Meals.propTypes = {
  breakfast: PropTypes.array.isRequired,
  lunch: PropTypes.array.isRequired,
  diner: PropTypes.array.isRequired,
  snack: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  breakfast: state_breakfast,
  lunch: state_lunch,
  diner: state_diner,
  snack: state_snack
});

export default connect(mapStateToProps, null)(Meals);
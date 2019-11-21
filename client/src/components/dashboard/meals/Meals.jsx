import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Buttons from './Buttons';

const Meals = () => {
  const [state, setState] = useState({ breakfast: true, lunch: false, diner: false, snack: false });
  const { breakfast, lunch, diner, snack } = state;

  return (
    <div className='row no-gutters'>
      <div className='col-9 m-auto'>
        <Buttons state={state} setState={setState} />
        { breakfast && <Card title='breakfast' state={state} setState={setState} /> }
        { lunch && <Card title='lunch' state={state} setState={setState} /> }
        { diner && <Card title='diner' state={state} setState={setState} /> }
        { snack && <Card title='snack' state={state} setState={setState} /> }
      </div>
    </div>
  )
}

Meals.propTypes = {

}

export default Meals;
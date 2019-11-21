import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Buttons from './Buttons';

const Meals = () => {
  const [state, setState] = useState({ breakfast: false, lunch: false, diner: false, snack: false });
  const { breakfast, lunch, diner, snack } = state;

  return (
    <div className='row no-gutters'>
      <div className='col-9 m-auto'>
        <Buttons state={state} setState={setState} />
        { breakfast && <Card title='breakfast' /> }
        { lunch && <Card title='lunch' /> }
        { diner && <Card title='diner' /> }
        { snack && <Card title='snack' /> }
      </div>
    </div>
  )
}

Meals.propTypes = {

}

export default Meals;
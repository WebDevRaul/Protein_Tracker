import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Buttons from './Buttons';

const arr = [
  { _id: '1', name: 'Apple', qty: '1999.9', type: 'pc.', cal: '1011.9', prot: '1011.9', fat: '1010.0', carb: '1501.0' },
  { _id: '2', name: 'Avocado', qty: '1', type: 'pc.', cal: '2', prot: '20', fat: '20', carb: '200' },
  { _id: '3', name: 'Beef', qty: '100', type: 'gr.', cal: '300', prot: '3', fat: '233', carb: '5' }
]

const Meals = () => {
  const [state, setState] = useState({ breakfast: false, lunch: false, diner: false, snack: false });
  const [items, setItems] = useState({ 
    breakfast_items: { title: 'Breakfast', items: [...arr]  },
    lunch_items: { title: 'Lunch', items: [...arr]  },
    diner_items: { title: 'Diner', items: [...arr]  },
    snack_items: { title: 'Snack', items: [...arr]  },
  });

  const { breakfast, lunch, diner, snack } = state;
  const { breakfast_items, lunch_items, diner_items, snack_items } = items;

  return (
    <div className='row no-gutters'>
      <div className='col-9 m-auto'>
        <Buttons state={state} setState={setState} />
        { breakfast && <Card data={breakfast_items} /> }
        { lunch && <Card data={lunch_items} /> }
        { diner && <Card data={diner_items} /> }
        { snack && <Card data={snack_items} /> }
      </div>
    </div>
  )
}

Meals.propTypes = {

}

export default Meals;
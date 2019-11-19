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
  const [state, setState] = useState({ select: '' });

  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onDelete = id => console.log(id)

  return (
    <div className='row no-gutters'>
      <div className='col-9 m-auto'>
        <Buttons onChange={onChange} />
        <Card title='Breakfast' item={arr} onDelete={onDelete} />
      </div>
    </div>
  )
}

Meals.propTypes = {

}

export default Meals;
import React, { Component } from 'react';

// Components
import TableFieldGroup from '../common/components/TableFieldGroup';

export default class Table extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <ul className='navbar list-inline'>
              <li className='list-inline-item'>Quantity</li>
              <li className='list-inline-item'>Product</li>
              <li className='list-inline-item'>Calories</li>
              <li className='list-inline-item'>Proteins</li>
              <li className='list-inline-item'>Fat</li>
              <li className='list-inline-item'>Carbohydrates</li>
            </ul>
          </li>
          <li><TableFieldGroup /></li>
        </ul>
      </div>
    )
  }
}

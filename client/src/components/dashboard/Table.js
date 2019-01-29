import React, { Component } from 'react';

// Components
import TableFieldGroup from '../common/components/TableFieldGroup';

export default class Table extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <ul>
              <li>Quantity</li>
              <li>Product</li>
              <li>Calories</li>
              <li>Proteins</li>
              <li>Fat</li>
              <li>Carbohydrates</li>
            </ul>
          </li>
          <li><TableFieldGroup /></li>
        </ul>
      </div>
    )
  }
}

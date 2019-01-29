import React, { Component } from 'react';

// Components
import TableFieldGroup from '../common/components/TableFieldGroup';
import SelectFieldGroup from '../common/components/SelectFieldGroup';

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      productVal: ''
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <div class="card">
          <div class="card-header">
            Table
          </div>
          <div className='card-body'>
            <SelectFieldGroup
              name='productList'
              value={this.state.productVal}
              onChange={this.onChange}
            />
          </div>
          <div class="card-body">
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
        </div>
      </div>
    )
  }
}

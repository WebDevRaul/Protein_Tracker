import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SelectFieldGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      productVal: ''
    }
  };

  onChange = (e) => {
    this.setState({ productVal: e.target.value })
  };

  onClick = () => {
    const { items } = this.props.items;
    const { productVal } = this.state;
    const { id } = this.props;
    const item = item => item.product_name === productVal;
    console.log(items) 
    console.log(items.find(item))
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Table
          </div>
          <div className='card-body'>
            <SelectFieldGroup
              name='productList'
              value={this.state.productVal}
              onChange={this.onChange}
              items={this.props.items}
              onClick={this.onClick}
            />
          </div>
          <div className="card-body">
            <ul className='navbar list-inline'>
              <li className='list-inline-item'>Quantity</li>
              <li className='list-inline-item'>Product</li>
              <li className='list-inline-item'>Calories</li>
              <li className='list-inline-item'>Proteins</li>
              <li className='list-inline-item'>Fat</li>
              <li className='list-inline-item'>Carbohydrates</li>
            </ul>
              {/* <li><TableFieldGroup /></li> */}
          </div>
        </div>
      </div>
    )
  }
};

Table.propTypes = {
  items: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  items: state.items
})

export default connect( mapStateToProps, {  })(Table)

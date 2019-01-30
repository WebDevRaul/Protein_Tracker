import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SelectFieldGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions/dashboard';

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
    const { items } = this.props.admin;
    const { productVal } = this.state;
    const table_id = this.props.id.toString();

    // Find item mach to user select
    const itemFunc = item => item.product_name === productVal;
    const item = items.find(itemFunc);

    // Add table_id to item
    const product = Object.assign({ table_id }, item);
    delete product._id;

    this.props.addProduct(product);
  }

  render() {
    const { items } = this.props.admin
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
              items={items}
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
  admin: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  admin: state.admin
});

export default connect( mapStateToProps, { addProduct })(Table);

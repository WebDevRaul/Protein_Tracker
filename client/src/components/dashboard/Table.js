import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SelectFieldGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';
import { addProduct, findProducts } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      productVal: ''
    }
  };

  componentDidMount(){
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.findProducts(this.props.auth.user.id)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { item } = this.props.dashboard;
    
    // Render if new item
    if (!isEmpty(item)) {
      if (item !== prevProps.dashboard.item) {
        this.props.findProducts(this.props.auth.user.id)
      }
    }
  }




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
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  admin: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
  findProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  admin: state.admin,
  dashboard: state.dashboard
});

export default connect( mapStateToProps, { addProduct, findProducts })(Table);

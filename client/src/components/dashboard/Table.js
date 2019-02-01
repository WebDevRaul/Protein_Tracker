import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SelectFieldGroup from '../common/components/SelectFieldGroup';
import TableFieldGroup from '../common/components/TableFieldGroup';

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
    const { items } = this.props.admin;
    const { id } = this.props;


// Number of Invalid Entries = 5
    // console.log(prodItem)

    // Check for empty prodItem
    // if (!isEmpty(prodItem)) {
    //   // Map prodItem
    //   productItem = prodItem.map(i => 
    //     <TableFieldGroup
    //       table_id={i.table_id}
    //       key={i._id}
    //       product_name={i.product_name}
    //       calories={i.calories}
    //       protein={i.protein}
    //       fat={i.fat}
    //       carbohydrates={i.carbohydrates}
    //       quantity={'1'}
    //     />
    //   )
    // }



    return (
      <div>
        <div className="card">
          <div className="card-header">
            Table {this.props.id}
          </div>
          <div className='card-body'>
            <SelectFieldGroup
              name='productList'
              value={this.state.productVal}
              onChange={this.onChange}
              items={items}
              onClick={this.onClick}
              option='Pick a product'
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
            {/* {productItem} */}
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

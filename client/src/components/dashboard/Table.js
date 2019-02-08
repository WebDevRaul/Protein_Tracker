import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SelectFieldGroup from '../common/components/SelectFieldGroup';
import ItemDashboard from './Item_Dashboard';
import ItemAdmin from '../admin/Item_Admin';

// Redux
import { connect } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/actions/dashboard';


class Table extends Component {
  constructor() {
    super();
    this.state = {
      productVal: '',
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
  };

  onDelete=(id)=> {
    this.props.deleteProduct(id);
  };



  render() {
    const { items } = this.props.admin;
    const { data, total }  = this.props;

    // Items in dashboard
    const productItems = data.map(i => 
      <ItemDashboard 
        key={i._id}
        product_name={i.product_name}
        quantity={i.quantity}
        type={i.type}
        calories={i.calories}
        protein={i.protein}
        fat={i.fat}
        carbohydrates={i.carbohydrates}
        id={i._id}
        class='far fa-times-circle fa-red'
        onClickFunc={this.onDelete}
       />
    );

    // Total of val items
    const totalItems = <ItemDashboard
      product_name='Total'
      quantity= {''}
      calories={total.calories ? String(total.calories): '0'}
      protein={total.protein ? String(total.protein) : '0'}
      fat={total.fat ? String(total.fat) : '0'}
      carbohydrates={total.carbohydrates ? String(total.carbohydrates) : '0'}
    />


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
            <ItemAdmin
              product_name= 'Product Name:'
              quantity= 'Quantity'
              calories= 'Calories'
              protein= 'Proteins'
              fat='Fat'
              carbohydrates= 'Carbohydrates'
            />
            {productItems}
            {totalItems}
          </div>
        </div>
        <br />
      </div>
    )
  }
};

Table.propTypes = {
  errors: PropTypes.object.isRequired,
  admin: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  total: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  admin: state.admin,
  dashboard: state.dashboard
});

export default connect( mapStateToProps, { addProduct, deleteProduct })(Table);

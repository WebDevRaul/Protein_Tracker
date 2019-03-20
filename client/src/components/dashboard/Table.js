import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SelectFieldGroup from '../common/components/SelectFieldGroup';
import ItemDashboard from './Item_Dashboard';

// Redux
import { connect } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';


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
    this.props.addProduct(product);
  };

  onDelete=(id)=> {
    this.props.deleteProduct(id);
  };



  render() {
    const { items } = this.props.admin;
    const { data, total }  = this.props;

    const compare = (a, b) => {
      // Use toUpperCase() to ignore character casing
      const nameA = a.product_name.toUpperCase();
      const nameB = b.product_name.toUpperCase();
    
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    };

    // Sort
    data.sort(compare);
    items.sort(compare);

    // Items in dashboard
    const productItems = data.map(i => 
      <ItemDashboard
        true_calories = {i.calories}
        true_protein = {i.protein} 
        true_fat = {i.fat}
        true_carbohydrates = {i.carbohydrates}
        true_quantity = {i.quantity}
        key={i._id}
        id={i._id}
        table_id={i.table_id}
        product_name={i.product_name}
        type={i.type}
        quantity={!isEmpty(i.temp_quantity) ? i.temp_quantity : i.quantity}
        calories={!isEmpty(i.temp_calories) ? i.temp_calories : i.calories}
        protein={!isEmpty(i.temp_protein) ? i.temp_protein : i.protein}
        fat={!isEmpty(i.temp_fat) ? i.temp_fat : i.fat}
        carbohydrates={!isEmpty(i.temp_carbohydrates) ? i.temp_carbohydrates : i.carbohydrates}
        icon='far fa-times-circle text-danger'
        onClickFunc={this.onDelete}
       />
    );

    return (
      <div className='dashboard-table mb-5'>
        <div className='row no-gutters'>
          <div className='col no-gutters'>
            <div className='card'>
              <div className='card-header text-center text-capitalize border-primary border bg-transparent no-gutters'>
                <h5>{this.props.id}</h5>
              </div>
              <div className='card-body border border-success border-top-0'>
                <div className='row'>
                  <div className='offset-1 col-10 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4  mt-3 mb-4'>
                    <SelectFieldGroup
                      name='productList'
                      value={this.state.productVal}
                      onChange={this.onChange}
                      items={items}
                      onClick={this.onClick}
                      option='Pick a product'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div>
                      <div className='row'>
                        <div className='col'>
                          <div className='text-capitalize'>
                            <p className='ml-4'>Name:</p>
                          </div>
                        </div>
                      </div>
                      <div className='row paper no-gutters'>
                        <div className='col text-center'><p>Qty.</p></div>
                        <div className='col text-center'><p>Cal.</p></div>
                        <div className='col text-center'><p>Prot.</p></div>
                        <div className='col text-center'><p>Fat</p></div>
                        <div className='col text-center'><p>Carb.</p></div>
                      </div>
                      {productItems}
                      <div className='row paper no-gutters mt-4'>
                        <div className='col text-capitalize'><p>Total</p></div>
                        <div className='col text-center'>
                          <p>{total.calories ? String(total.calories): '0'}</p>
                        </div>
                        <div className='col text-center'>
                          <p>{total.protein ? String(total.protein) : '0'}</p></div>
                        <div className='col text-center'>
                          <p>{total.fat ? String(total.fat) : '0'}</p>
                        </div>
                        <div className='col text-center'>
                          <p>{total.carbohydrates ? String(total.carbohydrates) : '0'}<span className='ml-4 pl-1'></span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

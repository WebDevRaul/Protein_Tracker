import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';
import SelectListGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/admin';
import { findProducts, addProductOffline, deleteAllOffline } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      breakfast: false,
      diner: false,
      snack: false,
      lunch: false,
      tableUpdate: false,
      table: '',
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { item } = nextProps.dashboard;

    if( item !== prevState.item ) {
      return { item };
   }
    else return null;
 }

  componentDidMount(){
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.findItems(this.props.auth.user.id);
      this.props.findProducts(this.props.auth.user.id);
    };
  };

  componentDidUpdate(prevProps, prevState) {
    const { breakfast, lunch, diner, snack, item} = this.props.dashboard;
    const breakfastState = this.state.breakfast;
    const lunchState = this.state.lunch;
    const dinerState = this.state.diner;
    const snackState = this.state.snack;
    const itemState = this.state.item;
    const { tableUpdate } = this.state;

    // Update states && show table
    this.updateStateTrue(breakfast, breakfastState, 'breakfast');
    this.updateStateTrue(lunch, lunchState, 'lunch');
    this.updateStateTrue(diner, dinerState, 'diner');
    this.updateStateTrue(snack, snackState, 'snack');
    // Update states && close table
    this.updateStateFalse(breakfast, breakfastState, tableUpdate,  'breakfast');
    this.updateStateFalse(lunch, lunchState, tableUpdate,  'lunch');
    this.updateStateFalse(diner, dinerState, tableUpdate,  'diner');
    this.updateStateFalse(snack, snackState, tableUpdate,  'snack');

    // Update Dashboard Redux no DB call
    if (prevProps.dashboard.item !== itemState) {
      if (!isEmpty(item)) {
        this.props.addProductOffline(item); 
      };
    };
  };
  


  
  updateStateTrue = (prop, state, update) => {
    if ( !isEmpty(prop) && state === false ) {this.setState({ [update]: true })}
  };

  updateStateFalse = (prop, state, tableUpdate, update) => {
    if (isEmpty(prop) && state === true && tableUpdate === false) {this.setState({ [update]: false })}
  };

  onChangeSelect = (e) => {
    this.setState({ table: e.target.value })
  };

  onClickSelect = (e) => {
    const { table } = this.state;
    const update = data => this.setState({ [data]: true });
    update(table);
    this.setState({ tableUpdate: true });
    console.log(this.totalFunc(1,2))
  };

  onClear = () => {
    const { id } = this.props.auth.user;
    this.props.deleteAllOffline(id);
    this.setState({ breakfast: false, tableUpdate: false })
  };

  totalFunc = (a, b) => {
    const { breakfast } = this.props.dashboard;
    const calories = breakfast.map(i => i.calories);
    console.log(calories)
    let total;
    for (let i = 0; i < calories.length; i++) {
      total= calories[i];
      
    }
    console.log(total);
    const add = x => y => x + y;
    return add(a)(b);
  }

  
  
  render() {
    const { breakfast, diner, snack, lunch } = this.state;

    // Object for SelectListGoup
    const table = [
      {product_name: 'breakfast', _id: 'breakfast'},
      {product_name: 'lunch', _id: 'lunch'},
      {product_name: 'diner', _id: 'diner'},
      {product_name: 'snack', _id: 'snack'},
    ];

    const total = {
      calories: '1',
      protein: '1',
      fat: '1',
      carbohydrates: '1'
    }

    return (
      <div className='container'>
        <SelectListGroup
          name='selectTable'
          value={this.state.table}
          onChange={this.onChangeSelect}
          onClick={this.onClickSelect}
          items={table}
          option='Select Table'
        />
        <button onClick={this.onClear}>Clear Tables</button>
        { breakfast ? <Table id={'breakfast'} data={this.props.dashboard.breakfast} total={total} /> : null }
        { lunch ? <Table id={'lunch'} data={this.props.dashboard.lunch} total={total} /> : null }
        { diner ? <Table id={'diner'} data={this.props.dashboard.diner} total={total} /> : null }
        { snack ? <Table id={'snack'} data={this.props.dashboard.snack} total={total} /> : null }
      </div>
    )
  }
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired,
  findItems: PropTypes.func.isRequired,
  findProducts: PropTypes.func.isRequired,
  addProductOffline: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  dashboard: state.dashboard,
});

export default connect( mapStateToProps, { findItems, findProducts, addProductOffline, deleteAllOffline } )(Dashboard);
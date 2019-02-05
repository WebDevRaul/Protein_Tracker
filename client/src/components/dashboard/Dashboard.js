import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';
import SelectListGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/admin';
import { findProducts, addProductOffline, deleteAllOffline, collectSum } from '../../redux/actions/dashboard';

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
    
    // Breakfast totalSum
    if (prevProps.dashboard.breakfast !== breakfast && !isEmpty(breakfast)) {
      const breakfastTable = this.totalSum(breakfast);
      this.props.collectSum(breakfastTable);
    }
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

  // Select Table
  onClickSelect = (e) => {
    const { table } = this.state;
    const update = data => this.setState({ [data]: true });
    update(table);
    this.setState({ tableUpdate: true });
  };

  // Clear tables
  onClear = () => {
    const { id } = this.props.auth.user;
    this.props.deleteAllOffline(id);
    this.setState({ breakfast: false, tableUpdate: false })
  };

  // Sum up the prod vals
   sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  };

  totalSum = (data) => {

    const caloriesVals = data.map(i => Number(i.calories));
    const proteinVals = data.map(i => Number(i.protein));
    const fatVals = data.map(i => Number(i.fat));
    const carbohydratesVals = data.map(i => Number(i.carbohydrates));

    const calories = this.sumAll(...caloriesVals);
    const protein = this.sumAll(...proteinVals);
    const fat = this.sumAll(...fatVals);
    const carbohydrates = this.sumAll(...carbohydratesVals);
    const totalSum = [
      {calories},
      {protein},
      {fat},
      {carbohydrates}
    ];
    return totalSum;
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
        { breakfast ? <Table id={'breakfast'} data={this.props.dashboard.breakfast} total={this.props.totalSum.breakfast} /> : null }
        { lunch ? <Table id={'lunch'} data={this.props.dashboard.lunch} total={this.props.totalSum.lunch} /> : null }
        { diner ? <Table id={'diner'} data={this.props.dashboard.diner} total={this.props.totalSum.diner} /> : null }
        { snack ? <Table id={'snack'} data={this.props.dashboard.snack} total={this.props.totalSum.snack} /> : null }
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
  deleteAllOffline: PropTypes.func.isRequired,
  collectSum: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  dashboard: state.dashboard,
  totalSum: state.totalSum,
});

export default connect( mapStateToProps, { findItems, findProducts, addProductOffline, deleteAllOffline, collectSum } )(Dashboard);
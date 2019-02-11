import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';
import SelectListGroup from '../common/components/SelectFieldGroup';
import Calculator from './Calculator';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/admin';
import { findProducts, addProductOffline, deleteAllOffline, collectSum, clearTable, clearLocalTable, collectActual } from '../../redux/actions/dashboard';

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
    const { breakfast, lunch, diner, snack, item } = this.props.dashboard;
    const  breakfastCalc = this.props.calculator.breakfast;
    const lunchCalc = this.props.calculator.lunch;
    const dinerCalc = this.props.calculator.diner;
    const snackCalc = this.props.calculator.snack;
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
    };

    // Lunch totalSum
    if (prevProps.dashboard.lunch !== lunch && !isEmpty(lunch)) {
      const lunchTable = this.totalSum(lunch);
      this.props.collectSum(lunchTable);
    };

    // Diner totalSum
    if (prevProps.dashboard.diner !== diner && !isEmpty(diner)) {
      const dinerTable = this.totalSum(diner);
      this.props.collectSum(dinerTable);
    };

    // Snak total
    if (prevProps.dashboard.snack !== snack && !isEmpty(snack)) {
      const snackTable = this.totalSum(snack);
      this.props.collectSum(snackTable);
    };

    // Clear local Table
    // Breakfast
    if (prevProps.dashboard.breakfast !== breakfast && isEmpty(breakfast) && breakfastState === true) {
      this.props.clearLocalTable('breakfast');
    };
    // Lunch
    if (prevProps.dashboard.lunch !== lunch && isEmpty(lunch) && lunchState === true) {
      this.props.clearLocalTable('lunch');
    };
    // Diner
    if (prevProps.dashboard.diner !== diner && isEmpty(diner) && dinerState === true) {
      this.props.clearLocalTable('diner');
    };
    // Snack
    if (prevProps.dashboard.snack !== snack && isEmpty(snack) && snackState === true) {
      this.props.clearLocalTable('snack');
    };

    if (prevProps.calculator.breakfast !== breakfastCalc && !isEmpty(breakfastCalc) || 
      prevProps.calculator.lunch !== lunchCalc && !isEmpty(lunchCalc) ||
      prevProps.calculator.diner !== dinerCalc && !isEmpty(dinerCalc) ||
      prevProps.calculator.snack !== snackCalc && !isEmpty(snackCalc)) {
      this.props.collectActual(this.actualFunc(this.props.calculator.breakfast, this.props.calculator.lunch, this.props.calculator.diner, this.props.calculator.snack))
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
    this.setState({ breakfast: false, tableUpdate: false });
    this.props.clearTable();
  };

  // Sum up the prod vals
   sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  };

  totalSum = (data) => {

    const caloriesVals = data.map(i => Number(!isEmpty(i.temp_calories) ? i.temp_calories : i.calories));
    const proteinVals = data.map(i => Number(!isEmpty(i.temp_protein) ? i.temp_protein : i.protein));
    const fatVals = data.map(i => Number(!isEmpty(i.temp_fat) ? i.temp_fat : i.fat));
    const carbohydratesVals = data.map(i => Number(!isEmpty(i.temp_carbohydrates) ? i.temp_carbohydrates : i.carbohydrates));

    const calories = this.sumAll(...caloriesVals);
    const protein = this.sumAll(...proteinVals);
    const fat = this.sumAll(...fatVals);
    const carbohydrates = this.sumAll(...carbohydratesVals);
    const totalSum = [
      {calories},
      {protein},
      {fat},
      {carbohydrates},
      {table: data[0].table_id}
    ];
    return totalSum;
  };


    // Sum up the prod vals
    sumAll = (...args) => {
      let sum = 0;
      for (let arg of args) sum += arg;
      return sum;
    };
  
    actualFunc = () => {
      const { breakfast, lunch, diner, snack } = this.props.calculator
      let totalCalories = []; 
      let totalProtein = [];
      let totalFat = [];
      let totalCarbohydrates = [];
  
      // Collect all data
      totalCalories.push(breakfast.calories, lunch.calories, diner.calories, snack.calories)
      totalProtein.push(breakfast.protein, lunch.protein, diner.protein, snack.protein)
      totalFat.push(breakfast.fat, lunch.fat, diner.fat, snack.fat)
      totalCarbohydrates.push(breakfast.carbohydrates, lunch.carbohydrates, diner.carbohydrates, snack.carbohydrates)
  
      // Calc the sum
      const calories = this.sumAll(...totalCalories);
      const protein = this.sumAll(...totalProtein);
      const fat = this.sumAll(...totalFat);
      const carbohydrates = this.sumAll(...totalCarbohydrates);
  
      // Return Obj sum
      const totalVals = {calories, protein, fat, carbohydrates}
      return totalVals;
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
        <Calculator />
        <SelectListGroup
          name='selectTable'
          value={this.state.table}
          onChange={this.onChangeSelect}
          onClick={this.onClickSelect}
          items={table}
          option='Select Table'
        />
        <button onClick={this.onClear}>Clear Tables</button>
        { breakfast ? <Table id={'breakfast'} data={this.props.dashboard.breakfast} total={this.props.calculator.breakfast} /> : null }
        { lunch ? <Table id={'lunch'} data={this.props.dashboard.lunch} total={this.props.calculator.lunch} /> : null }
        { diner ? <Table id={'diner'} data={this.props.dashboard.diner} total={this.props.calculator.diner} /> : null }
        { snack ? <Table id={'snack'} data={this.props.dashboard.snack} total={this.props.calculator.snack} /> : null }
      </div>
    )
  }
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired,
  calculator: PropTypes.object.isRequired,
  findItems: PropTypes.func.isRequired,
  findProducts: PropTypes.func.isRequired,
  addProductOffline: PropTypes.func.isRequired,
  deleteAllOffline: PropTypes.func.isRequired,
  collectSum: PropTypes.func.isRequired,
  clearTable: PropTypes.func.isRequired,
  clearLocalTable: PropTypes.func.isRequired,
  collectActual: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  dashboard: state.dashboard,
  calculator: state.calculator,
});

export default connect( mapStateToProps, { findItems, findProducts, addProductOffline, deleteAllOffline, collectSum, clearTable, clearLocalTable, collectActual } )(Dashboard);
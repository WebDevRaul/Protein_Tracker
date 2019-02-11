import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class Actual extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  // Sum up the prod vals
  sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  };

  totalFunc = () => {
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
    const totalVals = [
      {calories},
      {protein},
      {fat},
      {carbohydrates}
    ];

    return totalVals;

  }


  render() {
    const total = this.totalFunc();
    const actual = total.map(i => <li key={Object.entries(i)} className='list-inline-item'>{Object.keys(i)} :  {Object.values(i)}</li>)
    return (
      actual
    )
  }
};

Actual.propTypes = {

};

const mapStateToProps = state => ({
  calculator: state.calculator
});

export default connect(mapStateToProps, {})(Actual);

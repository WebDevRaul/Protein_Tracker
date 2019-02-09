import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class Total_Tables extends Component {

  // Sum up the prod vals
  sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  };

  totalFunc = () => {
    const { breakfast, lunch, diner, snack } = this.props.totalSum;
    let calories = []; 
    let protein = [];
    let fat = [];
    let carbohydrates = [];

    // Collect all data
    calories.push(breakfast.calories, lunch.calories, diner.calories, snack.calories)
    protein.push(breakfast.protein, lunch.protein, diner.protein, snack.protein)
    fat.push(breakfast.fat, lunch.fat, diner.fat, snack.fat)
    carbohydrates.push(breakfast.carbohydrates, lunch.carbohydrates, diner.carbohydrates, snack.carbohydrates)

    // Calc the sum
    const totalCalories = this.sumAll(...calories);
    const totalProtein = this.sumAll(...protein);
    const totalFat = this.sumAll(...fat);
    const totalCarbohydrates = this.sumAll(...carbohydrates);

    // Return Obj sum
    const totalVals = [
      {totalCalories},
      {totalProtein},
      {totalFat},
      {totalCarbohydrates}
    ];

    return totalVals;
  }

  render() {
    return (
      <div>
        <div className="card border-success mb-3">
          <div className="card-header bg-transparent border-success">target</div>
          <div className="card-body text-success">
            actual
          </div>
          <div className="card-footer bg-transparent border-success">dif</div>
        </div>
      </div>
    )
  }
};

Total_Tables.propTypes = {
  totalSum: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  totalSum: state.totalSum
});

export default connect(mapStateToProps, {})(Total_Tables);

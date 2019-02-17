import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { collectDiffrence } from '../../redux/actions/dashboard';

class Diffrence extends Component { 

  componentDidUpdate(prevProps, prevSteate) {
    const { actual, target } = this.props.calculator;
    
    if(prevProps.calculator.target !== target || 
      prevProps.calculator.actual !== actual) {
        
      this.props.collectDiffrence(this.totalDiffrence(target, actual))
    }
  }
  
  restAll = (a, b) => {
    return Number(a)-Number(b)
  }
  
  totalDiffrence = (target, actual) => {
    const calories = Number(this.restAll(target.calories, actual.calories));
    const protein = Number(this.restAll(target.protein, actual.protein));
    const fat = Number(this.restAll(target.fat, actual.fat));
    const carbohydrates = Number(this.restAll(target.carbohydrates, actual.carbohydrates));

    const diffrence = {calories, protein, fat, carbohydrates}

    return diffrence;
  }
  
  render() {
    const { diffrence } = this.props.calculator;

    const number = Object.entries(diffrence).map(i =>
      <div key={Object.entries(i)} className="col-md-3">
        <div className="card border-info p-1">
          <div className="text-danger text-center"><h5 className='mb-0'>{Object.values(i)[1]}</h5></div>
        </div>
      </div>)

    return (
      <div className='row'>
        {number}
      </div>
    )
  }
};

Diffrence.propTypes = {
  calculator: PropTypes.object.isRequired,
  collectDiffrence: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  calculator: state.calculator
});

export default connect( mapStateToProps, { collectDiffrence } )(Diffrence);
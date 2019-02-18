import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import CardFieldGroup from '../common/components/CardFieldGroup';

// Redux
import { connect } from 'react-redux';
import { saveTotal } from '../../redux/actions/dashboard';
import { clearError } from '../../redux/actions/commonAction';

// Common
import isEmpty from '../common/isEmpty';

class Set extends Component {
  constructor() {
    super();
    this.state = {
      calories: '',
      protein: '',
      fat: '',
      carbohydrates: '',
      errors: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { errors } = nextProps.errors;
    if( errors !== prevState.errors) {
      return { 
        errors: nextProps.errors.errors,
      };
    }
   else return null;
  };

  componentDidUpdate(prevProps, prevState) {
    const { errors } = this.props.errors;
    const { target } = this.props.calculator;

    // Reset the errors
    if (!isEmpty(errors)) {
      setTimeout(() => { this.props.clearError() }, 3000);
    }

    // Close setForm if no error
    if (target !== prevProps.calculator.target) {
      this.props.cancel();
      // Clear setForm
      this.setState({ 
        calories: '',
        protein: '',
        fat: '',
        carbohydrates: ''
       });
    }
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = () => {
    this.props.cancel()
  };

  onSave = () => {
    const { id } = this.props.auth.user;
    const { calories, protein, fat, carbohydrates } = this.state;

    const item = {calories, protein, fat, carbohydrates}

    // Save to DB & redux
    this.props.saveTotal(item, id);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="spacial-card text-capitalize font-weight-bold">
        <form noValidate onSubmit={this.onSubmit}>
          <ul className="navbar list-inline">
            <li className="list-inline-item">
              <h5 className='mb-0'>Calories</h5>
              <CardFieldGroup
                name='calories'
                value={this.state.calories}
                onChange={this.onChange}
                error={errors.setCalories}
              />
            </li>
            <li className="list-inline-item">
              <h5 className='mb-0'>Protein</h5>
              <CardFieldGroup
                name='protein'
                value={this.state.protein}
                onChange={this.onChange}
                error={errors.setProtein}
              />
            </li>
            <li className="list-inline-item">
              <h5 className='mb-0'>Fat</h5>
              <CardFieldGroup
                name='fat'
                value={this.state.fat}
                onChange={this.onChange}
                error={errors.setFat}
              />
            </li>
            <li className="list-inline-item">
              <h5 className='mb-0'>Carbohydrates</h5>
              <CardFieldGroup
                name='carbohydrates'
                value={this.state.carbohydrates}
                onChange={this.onChange}
                error={errors.setCarbohydrates}
              />
            </li>
          </ul>
        </form>
        <button
          className='btn btn-danger float-left'
          onClick={this.onClick}
        >
          Cancel
        </button>
        <button
          className='btn btn-success float-right'
          onClick={this.onSave}
        >
          Save
        </button>
      </div>
    )
  }
};
Set.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  calculator: PropTypes.object.isRequired,
  saveTotal: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  calculator: state.calculator
});

export default connect( mapStateToProps, { saveTotal, clearError } )(Set);
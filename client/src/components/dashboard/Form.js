import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import CardFieldGroup from '../common/components/CardFieldGroup';

// Redux
import { connect } from 'react-redux';
import { saveTotal } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';
import validateFormInput from '../common/validator/form';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      gender: '',
      height: '',
      weight: '',
      activity: '',
      errors: {}
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { errors } = this.state;
    const { target } = this.props.calculator;

    // Reset the errors
    if (!isEmpty(errors)) {
      setTimeout(() => { this.setState({ errors: {} }) }, 5000);
    }

    // Close setForm if no error
    if (target !== prevProps.calculator.target) {
      this.props.cancel();
      // Clear setForm
      this.setState({ 
        age: '',
        gender: '',
        activity: '',
        height: '',
        weight: ''
       });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = () => {
    this.props.cancel()
  }

  onSave = (e) => {
    const { weight, height, age, gender, activity } = this.state;
    const { id } = this.props.auth.user;
    let calories, protein, fat, carbohydrates;

    const data = { age, gender, activity, height, weight };

    // Validation
    const { errors, isValid } = validateFormInput(data);

    // Check Validation
    if (!isValid) {
      // Set Errors
      this.setState({ errors })

    } else {

      // Calculate male/female cal,prot,fat & carb
      if (!isEmpty(gender) && gender === 'male') {
        calories=(66.4730+(13.7516 * Number(weight)) + (5.0033 * Number(height)) - (6.7550 * Number(age))) * Number(activity);
        protein=weight*0.825;
        fat=(calories * 0.25)/9;
        carbohydrates=calories/4;
      };
      if (!isEmpty(gender) && gender === 'female') {
        calories=(655.0955 + (9.5634 * Number(weight)) + (1.8496 * Number(height))-(4.6756 * Number(age))) * Number(activity);
        protein=weight*0.825;
        fat=(calories * 0.25)/9;
        carbohydrates=calories/4;
      };
      // Create item
      const item = {
        calories: Math.ceil(calories).toString(),
        protein: Math.ceil(protein).toString(),
        fat: Math.ceil(fat).toString(),
        carbohydrates: Math.ceil(carbohydrates).toString()
      };
    
      // Save to DB & redux
      this.props.saveTotal(item, id)
    }
  }


  render() {
    const { errors } = this.state;
    return (
      <div className='form'>
        <form className='font-weight-bold mt-5'>
          <div className='row'>
            <div className='col- col-sm-6 col-md-6 offset-lg-1 col-lg-2'>
              <CardFieldGroup
                label='d-none'
                name='age'
                value={this.state.age}
                placeholder='Age'
                onChange={this.onChange}
                error={errors.age}
              />
            </div>
            <div className='col- col-sm-6 col-md-6 col-lg-2'>
              <div className="form-group">
                <select
                  className={classnames('form-control custom-select form-control-xsm', {'is-invalid' : !isEmpty(errors.gender)})}
                  name='gender'
                  value={this.state.gender}
                  onChange={this.onChange}
                >
                  <option>Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
                {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
              </div>
            </div>
            <div className='col- col-sm-6 col-md-6 col-lg-2'>
              <div className="form-group">
                <select 
                  className={classnames('form-control custom-select form-control-xsm', {'is-invalid' : !isEmpty(errors.activity)})}
                  name='activity'
                  value={this.state.activity}
                  onChange={this.onChange}
                >
                  <option>Activity</option>
                  <option value='1.2'>Little to no exercise</option>
                  <option value='1.375'>1–3 days per week</option>
                  <option value='1.55'>3–5 days per week</option>
                  <option value='1.725'>6–7 days per week</option>
                  <option value='1.9'>Twice per day</option>
                </select>
                {errors.activity && <div className='invalid-feedback'>{errors.activity}</div>}
              </div>
            </div>
            <div className='col- col-sm-6 col-md-6 col-lg-2'>
              <CardFieldGroup
                label='d-none'
                name='height'
                value={this.state.height}
                placeholder='Height (cm)'
                onChange={this.onChange}
                error={errors.height}
              />
            </div>
            <div className='col- col-sm-6 col-md-6 col-lg-2'>
              <CardFieldGroup
                label='d-none'
                name='weight'
                value={this.state.weight}
                placeholder='Weight (kg)'
                onChange={this.onChange}
                error={errors.weight}
              />
            </div>
          </div>
        </form>
        <div className='form-btn-div mb-2'>
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
      </div>
    )
  }
};

Form.propTypes = {
  auth: PropTypes.object.isRequired,
  calculator: PropTypes.object.isRequired,
  saveTotal: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  calculator: state.calculator
});

export default connect( mapStateToProps, {saveTotal} )(Form)
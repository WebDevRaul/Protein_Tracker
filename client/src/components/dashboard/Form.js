import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import CardFieldGroup from '../common/components/CardFieldGroup';

// Redux
import { connect } from 'react-redux';
import { saveTotal } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      sex: '',
      height: '',
      weight: '',
      activity: '',
      errors: ''
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = () => {
    this.props.cancel()
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { weight, height, age, sex, activity } = this.state;
    const { id } = this.props.auth.user;
    let calories, protein, fat, carbohydrates;

    // Calculate male/female cal,prot,fat & carb
    if (!isEmpty(sex) && sex === 'male') {
      calories=(66.4730+(13.7516 * Number(weight)) + (5.0033 * Number(height)) - (6.7550 * Number(age))) * Number(activity);
      protein=weight*0.825;
      fat=(calories * 0.25)/9;
      carbohydrates=calories/4;
    };
    if (!isEmpty(sex) && sex === 'female') {
      calories=(655.0955 + (9.5634 * Number(weight)) + (1.8496 * Number(height))-(4.6756 * Number(age))) * Number(activity);
      protein=weight*0.825;
      fat=(calories * 0.25)/9;
      carbohydrates=calories/4;
    };
      const item = {
        calories: Math.ceil(calories).toString(),
        protein: Math.ceil(protein).toString(),
        fat: Math.ceil(fat).toString(),
        carbohydrates: Math.ceil(carbohydrates).toString()
      };
  
      // Save to DB & redux
      this.props.saveTotal(item, id)
  }


  render() {
    const { errors } = this.state;
    return (
      <div className="spacial-card text-capitalize font-weight-bold">
        <form noValidate onSubmit={this.onSubmit}>
          <ul className="navbar list-inline">
            <li className="list-inline-item">
              <CardFieldGroup
                label='d-none'
                name='age'
                value={this.state.age}
                placeholder='Age'
                onChange={this.onChange}
                error={errors}
              />
            </li>
            <li className="list-inline-item">
              <div className="form-group">
                <select 
                  className="form-control custom-select form-control-xsm"
                  name='sex'
                  value={this.state.sex}
                  onChange={this.onChange}
                >
                  <option>Sex</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="form-group">
                <select 
                  className="form-control custom-select form-control-xsm"
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
              </div>
            </li>
            <li className="list-inline-item">
              <CardFieldGroup
                label='d-none'
                name='height'
                value={this.state.height}
                placeholder='Height'
                onChange={this.onChange}
                error={errors}
              />
            </li>
            <li className="list-inline-item">
              <CardFieldGroup
                label='d-none'
                name='weight'
                value={this.state.weight}
                placeholder='Weight'
                onChange={this.onChange}
                error={errors}
              />
            </li>
            <li className="list-inline-item">
              <div className='form-group'>
                <input
                  type='submit'
                  className='form-control form-control-xsm'
                  value='Save'
                />
              </div>
            </li>
          </ul>
        </form>
        <button
          className='btn btn-danger float-right'
          onClick={this.onClick}
        >
          Cancel
        </button>
      </div>
    )
  }
};

Form.propTypes = {
  errors: PropTypes.object.isRequired,
  saveTotal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect( mapStateToProps, {saveTotal} )(Form)
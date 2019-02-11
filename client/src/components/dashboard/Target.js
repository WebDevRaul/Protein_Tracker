import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import CardFieldGroup from '../common/components/CardFieldGroup';

// Redux
import { connect } from 'react-redux';
import { saveTotal, collectDaily } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';

class Target extends Component {
  constructor() {
    super();
    this.state = {
      form: true,
      age: '',
      sex: '',
      height: '',
      weight: '',
      activity: '',
      calories: '0',
      protein: '0',
      fat: '0',
      carbohydrates: '0',
    }
  };

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.collectDaily(this.props.auth.user.id);
    };
  }

  componentDidUpdate(prevProps, prevState) {

  }





  showForm = () => {
    this.setState({ form: !this.state.form })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
    const { form, errors } = this.state;

    return (
      <div>
        <div className="card paper">
          <div className="card-header bg-transparent">
            <span className='ml-5'>calories: {this.state.calories}</span>
            <span className='ml-5'>protein: {this.state.protein}</span>
            <span className='ml-5'>fat: {this.state.fat}</span>
            <span className='ml-5'>carbohydrates: {this.state.carbohydrates}</span>
          </div>
          <div className={classnames("card-body", {'d-none' : !form})}>
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
            </div>
          </div>
        </div>
      </div>
    )
  }
};

Target.propTypes = {
  auth: PropTypes.object.isRequired,
  caculator: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  saveTotal: PropTypes.func.isRequired,
  collectDaily: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  caculator: state.caculator,
  errors: state.errors,
});

export default connect( mapStateToProps, { saveTotal, collectDaily } )(Target);

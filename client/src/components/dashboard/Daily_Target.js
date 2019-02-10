import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';
import CardFieldGroup from '../common/components/CardFieldGroup';

class DailyTarget extends Component {
  constructor() {
    super();
    this.state = {
      form: true,
      age: '',
      sex: '',
      height: '',
      weight: '',
      activity: '',
    }
  };

  calculate = () => {
    this.setState({ form: !this.state.form })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    const { form, errors } = this.state;

    return (
      <div>
        <div className="card paper">
          <div className="card-header bg-transparent">
            <span
              onClick={this.calculate}
            >edit</span>
          </div>
          <div className={classnames("card-body", {'d-none' : !form})}>
            <div className="spacial-card text-capitalize font-weight-bold">
              <form noValidate>
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
                        <option value='easy'>easy</option>
                        <option value='medium'>medium</option>
                        <option value='hard'>hard</option>
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
                        type='button'
                        className='form-control form-control-xsm'
                        value='Save'
                        onClick={this.onSubmit}
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

DailyTarget.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect( mapStateToProps, {} )(DailyTarget);

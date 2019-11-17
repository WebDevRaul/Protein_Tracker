import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import Form from './Form';
import Set from './Set';

// Redux
import { connect } from 'react-redux';
import { collectTarget } from '../../redux/actions/dashboard';


class Target extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
      set: false,
    }
  };

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.collectTarget(this.props.auth.user.id);
    };
  }



  showForm = () => {
    this.setState({ form: !this.state.form })
  }

  showSet = () => {
    this.setState({ set: !this.state.set })
  }

  cancelForm = () => {
    this.setState({ form: false })
  }

  cancelSet = () => {
    this.setState({ set: false })
  }

  render() {
    const { form, set } = this.state;
    const { calories, protein, fat, carbohydrates } = this.props.calculator.target;

    const buttons = ( 
      <div className='float-right mt-3'>
        <span onClick={this.showSet} className="btn badge badge-primary m-1">Set</span>
        <span onClick={this.showForm} className="btn badge badge-primary m-1">Calculate</span>
      </div>
    );

    return (
      <div>
        <div className='row'>
          <div className="col-3">
            <div className="card border-info p-2">
              <div className="card border-info shadow text-info p-2 my-card" >
                <h4>Cal.</h4>
              </div>
              <div className="text-info text-center mt-5"><h5>{calories}</h5></div>
            </div>
          </div>
          <div className="col-3">
            <div className="card border-info p-2">
              <div className="card border-info shadow text-info p-2 my-card" >
                <h4>Prot.</h4>
              </div>
              <div className="text-info text-center mt-5"><h5>{protein}</h5></div>
            </div>
          </div>
          <div className="col-3">
            <div className="card border-info p-2">
              <div className="card border-info shadow text-info p-2 my-card" >
                <h4>Fat</h4>
              </div>
              <div className="text-info text-center mt-5"><h5>{fat}</h5></div>
            </div>
          </div>
          <div className="col-3">
            <div className="card border-info p-2">
              <div className="card border-info shadow text-info p-2 my-card" >
                <h4>Carb.</h4>
              </div>
              <div className="text-info text-center mt-5"><h5>{carbohydrates}</h5></div>
            </div>
          </div>
        </div>
        {(form || set) ? null : buttons}
        <div className={classnames("card-body mt-4 mb-4", {'d-none' : !form})}>
          <Form cancel={this.cancelForm} />
        </div>
        <div className={classnames("card-body mt-4 mb-4", {'d-none' : !set})}>
          <Set cancel={this.cancelSet} />
        </div>
      </div>
    )
  }
};

Target.propTypes = {
  auth: PropTypes.object.isRequired,
  calculator: PropTypes.object.isRequired,
  collectTarget: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  calculator: state.calculator,
});

export default connect( mapStateToProps, { collectTarget } )(Target);
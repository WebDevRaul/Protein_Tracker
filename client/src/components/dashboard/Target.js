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
    const { target } = this.props.calculator;

    const number = Object.entries(target).map(i => 
      <li key={Object.entries(i)} className='list-inline-item'>
        {Object.values(i)[0]}: {Object.values(i)[1]}
      </li>)

    const buttons = ( 
      <div className='float-right'>
        <button
          onClick={this.showSet}
          className='btn btn-primary mr-3'
        >Set
        </button>
        <span className='bold'>OR</span>
        <button
          className='btn btn-primary ml-3'
          onClick={this.showForm}
        >Calculate
        </button>
      </div>
    );

    return (
      <div>
        <div className="card paper">
          <div className="bg-transparent">
            <ul className='navbar list-inline'>
              {number}
            </ul>
            {(form || set) ? null : buttons}
          </div>
          <div className={classnames("card-body", {'d-none' : !form})}>
            <Form cancel={this.cancelForm} />
          </div>
          <div className={classnames("card-body", {'d-none' : !set})}>
            <Set cancel={this.cancelSet} />
          </div>
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

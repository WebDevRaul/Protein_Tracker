import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Components
import TextFieldGroup from '../common/components/TextFieldGroup';

// Common
import isEmpty from '../common/isEmpty';
import Item from '../common/defaultItems';

// Redux
import { connect } from 'react-redux';
import { loginUser, setDefaultItems } from '../../redux/actions/login_user';
import { clearError } from '../../redux/actions/commonAction';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { errors } = nextProps.errors;
    if (errors !== prevState.errors) {
      return {
        errors: nextProps.errors.errors
      }
    } else {
      return null;
    }
  };

  componentDidMount() {
    const { user } = this.props.auth;
  }

  componentDidUpdate(prevProps, prevState) {
    const { isAuthenticated } = this.props.auth;
    const { id } = this.props.auth.user;
    const { errors } = this.props.errors;
    const item = Item;
    const data = { item }
    // Redirect when if authenticated
    if (isAuthenticated) {
      this.props.setDefaultItems(data, id);
      this.props.history.push('/dashboard');
    };
    // Clear errors
    if (!isEmpty(errors)) {
      setTimeout(() => { this.props.clearError() }, 3000);
    }
  }





  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
  };

  render() {

    const { errors } = this.state;

    return (
      <div>
        <section id="login" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-gradient text-white">
                    <h4>
                      <i className="fas fa-sign-in-alt"></i> Sign in</h4>
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <TextFieldGroup
                        text='Email'
                        type='email'
                        icon='fas fa-envelope'
                        name='email'
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                      />
                      <TextFieldGroup
                        text='Password'
                        type='password'
                        icon='fas fa-lock'
                        name='password'
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                      />
                      <input type="submit" value="Sign in" className="btn btn-secondary btn-block bg-primary" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

Login.propTypes = {
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearError: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect( mapStateToProps, { loginUser, setDefaultItems, clearError })(withRouter(Login))

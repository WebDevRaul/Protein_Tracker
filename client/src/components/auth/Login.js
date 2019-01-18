import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Components
import TextFieldGroup from '../common/TextFieldGroup';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/login_user';

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

  componentDidUpdate(prevProps, prevState) {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.props.history.push('/dashboard')
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
        <section id="login" className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4>
                      <i className="fas fa-sign-in-alt"></i> Login</h4>
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <TextFieldGroup
                        text='Email'
                        type='email'
                        name='email'
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                      />
                      <TextFieldGroup
                        text='Password'
                        type='password'
                        name='password'
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                      />
                      <input type="submit" value="Login" className="btn btn-secondary btn-block bg-primary" />
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
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect( mapStateToProps, { loginUser })(withRouter(Login))

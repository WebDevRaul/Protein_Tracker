import React, { Component } from 'react';
import PropTpyes from 'prop-types';
import { withRouter } from 'react-router-dom';


// Components
import TextFieldGroup from '../common/components/TextFieldGroup';

// Common
import isEmpty from '../common/isEmpty';
import Item from '../common/defaultItems';

// Redux
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/register_user';
import { clearError } from '../../redux/actions/commonAction';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password2: '',
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { errors } = nextProps.errors;
    if( errors !== prevState.errors ) {
      return { 
        errors: nextProps.errors.errors,
      };
    }
   else return null;
  };

  componentDidUpdate(prevProps, prevState) {
    const { errors } = this.state;

    // This way we dont need to call ComponentWillUnmount
    // to reset the setTimeout();
    if (!isEmpty(errors)) {
      setTimeout(() => { this.props.clearError() }, 3000);
    }
  }
  



  onChange=(e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit=(e) => {
    e.preventDefault();
    const item = Item;
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    const data = { user, item};
    console.log(data)

    // Register and save default Item(s)
      this.props.registerUser(data, this.props.history);   
  }


  render() {

    const { errors } = this.state;

    return (
      <div>
        <section id="register" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-gradient text-white">
                    <h4>
                      <i className="fas fa-user-plus"></i> Register</h4>
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <TextFieldGroup 
                        text='First Name'
                        icon='fas fa-user'
                        name='first_name'
                        value={this.state.first_name}
                        onChange={this.onChange}
                        error={errors.first_name}
                      />
                      <TextFieldGroup
                        text='Last Name'
                        name='last_name'
                        icon='fas fa-user'
                        value={this.state.last_name}
                        onChange={this.onChange}
                        error={errors.last_name}
                      />
                      <TextFieldGroup
                        text='Username'
                        name='username'
                        icon='fas fa-user'
                        value={this.state.username}
                        onChange={this.onChange}
                        error={errors.username}
                      />
                      <TextFieldGroup
                        text='Email'
                        name='email'
                        icon='fas fa-envelope'
                        type='email'
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                      />
                      <TextFieldGroup
                        text='Password'
                        name='password'
                        icon='fas fa-lock'
                        type='password'
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                      />
                      <TextFieldGroup
                        text='Confirm Password'
                        name='password2'
                        icon='fas fa-lock'
                        type='password'
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                      />
                      <input type="submit" value="Register" className="btn btn-secondary btn-block bg-primary" />
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

Register.propTypes = {
  errors: PropTpyes.object.isRequired,
  clearError: PropTpyes.func.isRequired,
  registerUser: PropTpyes.func.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect( mapStateToProps, { registerUser, clearError } )(withRouter(Register));

import React, { Component } from 'react';

// Components
import TextFieldGroup from '../common/TextFieldGroup';

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

  onChange=(e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit=(e) => {
    e.preventDefault();
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(user);
  }

  render() {
    return (
      <div>
        <section id="register" className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4>
                      <i className="fas fa-user-plus"></i> Register</h4>
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <TextFieldGroup 
                        text='First Name'
                        name='first_name'
                        value={this.state.first_name}
                        onChange={this.onChange}
                      />
                      <TextFieldGroup
                        text='Last Name'
                        name='last_name'
                        value={this.state.last_name}
                        onChange={this.onChange}
                      />
                      <TextFieldGroup
                        text='Username'
                        name='username'
                        value={this.state.username}
                        onChange={this.onChange}
                      />
                      <TextFieldGroup
                        text='Email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      <TextFieldGroup
                        text='Password'
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      <TextFieldGroup
                        text='Confirm Password'
                        name='password2'
                        type='password'
                        value={this.state.password2}
                        onChange={this.onChange}
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
}

export default Register;

import React, { Component } from 'react';

// Components
import TextFieldGroup from '../common/TextFieldGroup';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  };



  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(credentials);
  };

  render() {
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
                      />
                      <TextFieldGroup
                        text='Password'
                        type='password'
                        name='password'
                        onChange={this.onChange}
                        value={this.state.password}
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

import React, { Component } from 'react';

// Components
import TextFieldGroup from '../common/TextFieldGroup';

export default class Login extends Component {
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
                    <form noValidate>
                      <TextFieldGroup
                        text='Email'
                        type='email'
                        name='email'
                      />
                      <TextFieldGroup
                        text='Password'
                        type='password'
                        name='password'
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
}

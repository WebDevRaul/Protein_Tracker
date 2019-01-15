import React, { Component } from 'react';

// Components
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  onSubmit=(e) => {
    e.preventDefault();

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
                      />
                      <TextFieldGroup
                        text='Last Name'
                        name='last_name'
                      />
                      <TextFieldGroup
                        text='Username'
                        name='username'
                      />
                      <TextFieldGroup
                        text='Email'
                        name='email'
                        type='email'
                      />
                      <TextFieldGroup
                        text='Password'
                        name='password'
                        type='password'
                      />
                      <TextFieldGroup
                        text='Confirm Password'
                        name='password2'
                        type='password'
                      />
                      <input type="submit" value="Register" class="btn btn-secondary btn-block" />
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

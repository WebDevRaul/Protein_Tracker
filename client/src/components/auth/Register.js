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
                      <div class="form-group">
                        <input type="text" name="first_name" class="form-control" required />
                      </div>
                      <div>
                        <label for="first_name">First Name</label>
                        <TextFieldGroup 
                          name='first_name'
                          placeholder='First Name'
                        />
                      </div>
                      <div class="form-group">
                        <label for="last_name">Last Name</label>
                        <input type="text" name="last_name" class="form-control" required />
                      </div>
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" class="form-control" required />
                      </div>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" class="form-control" required />
                      </div>
                      <div class="form-group">
                        <label for="password2">Password</label>
                        <input type="password" name="password" class="form-control" required />
                      </div>
                      <div class="form-group">
                        <label for="password">Confirm Password</label>
                        <input type="password" name="password2" class="form-control" required />
                      </div>
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

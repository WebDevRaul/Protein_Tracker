import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import CardFieldGroup from '../common/CardFieldGroup';

// Redux
import { connect } from 'react-redux';

class Admin extends Component {
  constructor(){
    super();
    this.state = {
      product_name: '',
      protein: '',
      carbohydrates: '',
      fat: '',
      calories: ''
    }
  }

  static getDerivatedStatefromProps(nextProps, prevState) {
    const {errors} = nextProps.errors;
    if (errors !== prevState.errors) {
      return {
        errors: nextProps.errors.errors
      }
    } else {
      return null;
    }
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  } 

  render() {
    const errors = this.state;
    return (
      <div>
         <section id="login" className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4>
                      <i></i>Admin</h4>
                  </div>
                  <div className="card-body">
                    <div className="card">
                      <div className="card-header">
                        add product
                      </div>
                      <div className="card-body">
                        <form noValidate onSubmit={this.onSubmit}>
                          <ul>
                            
                          </ul>
                        </form>
                      </div>
                    </div>
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

Admin.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect( mapStateToProp, {} )(Admin);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import CardFieldGroup from '../common/CardFieldGroup';

//Css
import '../../css/admin.css';

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
      calories: '',
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
  };


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const item = {
      product_name: this.state.product_name,
      protein: this.state.protein,
      carbohydrates: this.state.carbohydrates,
      fat: this.state.fat,
      calories: this.state.calories
    };

    // Clear the form
    this.setState({
      product_name: '',
      protein: '',
      carbohydrates: '',
      fat: '',
      calories: ''
    });
    console.log(item)
  };

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
                          <div className='admin-form'>
                            <ul className="navbar list-inline">
                              <li className="list-inline-item">Product name
                                <CardFieldGroup
                                  name='product_name'
                                  value={this.state.product_name}
                                  onChange={this.onChange}
                                  error={errors.product_name}
                                />
                              </li>
                            </ul>
                          </div>
                          <ul className="navbar list-inline">
                            <li className="list-inline-item">Calories
                              <CardFieldGroup
                                name='calories'
                                value={this.state.calories}
                                onChange={this.onChange}
                                error={errors.calories}
                              />
                            </li>
                            <li className="list-inline-item">Protein
                              <CardFieldGroup
                                name='protein'
                                value={this.state.protein}
                                onChange={this.onChange}
                                error={errors.protein}
                              />
                            </li>
                            <li className="list-inline-item">Fat
                              <CardFieldGroup
                                name='fat'
                                value={this.state.fat}
                                onChange={this.onChange}
                                error={errors.fat}
                              />
                            </li>
                            <li className="list-inline-item">Carbohydrates
                              <CardFieldGroup
                                name='carbohydrates'
                                value={this.state.carbohydrates}
                                onChange={this.onChange}
                                error={errors.carbohydrates}
                              />
                            </li>
                          </ul>
                            <input type="submit" value="Save" className="btn btn-secondary btn-block bg-primary" />
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
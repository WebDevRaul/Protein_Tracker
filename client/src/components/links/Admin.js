import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import CardFieldGroup from '../common/components/CardFieldGroup';
import ItemName from '../Item_name';

// Redux
import { connect } from 'react-redux';
import { saveItem } from '../../redux/actions/save_item';
import { clearError } from '../../redux/actions/commonAction';
import { findItems } from '../../redux/actions/find_items';

// Common
import isEmpty from '../common/isEmpty';

//Css
import '../../css/admin.css';

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

  static getDerivedStateFromProps(nextProps, prevState) {
    const { errors } = nextProps.errors;
    if( errors !== prevState.errors) {
      return { 
        errors: nextProps.errors.errors,
      };
    }
   else return null;
  };

  componentDidMount(){
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.findItems(this.props.auth.user.id)
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { errors } = this.state;
    const { item } = this.props.item

    // Reset the errors
    if (!isEmpty(errors)) {
      setTimeout(() => { this.props.clearError() }, 3000);
    }
    
    // Render if new item
    if (!isEmpty(item)) {
      if (item !== prevProps.item.item) {
        this.props.findItems(this.props.auth.user.id)
      }
    }
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = (e) => {
    const {user} = this.props.auth;
    e.preventDefault();
    const item = {
      user: user.id,
      product_name: this.state.product_name,
      protein: this.state.protein,
      carbohydrates: this.state.carbohydrates,
      fat: this.state.fat,
      calories: this.state.calories
    };

    this.props.saveItem(item);

    // Clear the form
    this.setState({
      product_name: '',
      protein: '',
      carbohydrates: '',
      fat: '',
      calories: ''
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
         <section className="bg-light py-5">
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
        <section className="bg-light py-5">
          <ItemName />
        </section>
      </div>
    )
  }
};

Admin.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  saveItem: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  findItems: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  errors: state.errors,
  auth: state.auth,
  item: state.item
});

export default connect( mapStateToProp, { saveItem, findItems, clearError } )(Admin);

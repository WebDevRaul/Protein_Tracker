import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import CardFieldGroup from '../common/components/CardFieldGroup';
import ListAdmin from './List_Items';

// Redux
import { connect } from 'react-redux';
import { saveItem, findItems } from '../../redux/actions/admin';
import { clearError } from '../../redux/actions/commonAction';

// Common
import isEmpty from '../common/isEmpty';

//Css
import '../../css/admin.css';

class Admin extends Component {
  constructor(){
    super();
    this.state = {
      product_name: '',
      quantity: '',
      type: '',
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
    const { item } = this.props.admin

    // Reset the errors
    if (!isEmpty(errors)) {
      setTimeout(() => { this.props.clearError() }, 3000);
    }
    
    // Render if new item
    if (!isEmpty(item)) {
      if (item !== prevProps.admin.item) {
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
      quantity: this.state.quantity,
      type: this.state.type,
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
      quantity: '',
      type: '',
      carbohydrates: '',
      fat: '',
      calories: ''
    });
  };

  render() {
    const { errors } = this.state;

    // Type input
    const select = [{id: ''},{id: 'gr.'},{id: 'pc.'},{id: 'ml.'}]
    const selectOptions = select.map(i => (
      <option key={i.id} value={i.id} >
        {i.id}
      </option>
    ));

    return (
      <div className='admin'>
         <section className="admin-section-one">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="special-card">
                  <div className="special-card-header mb-5 pb-5 text-white">
                    <h3><i className='card-header-h4'>Admin</i></h3>
                  </div>
                  <div className="card-body">
                    <div className="spacial-card text-white text-capitalize font-weight-bold">
                      <div className="special-card-header mt-5 text-center">
                        <h3>add product</h3>
                      </div>
                      <div className="card-body">
                        <form noValidate onSubmit={this.onSubmit}>
                          <ul className="navbar list-inline">
                            <li className="list-inline-item"><h5>Product name</h5>
                              <CardFieldGroup
                                name='product_name'
                                value={this.state.product_name}
                                onChange={this.onChange}
                                error={errors.product_name}
                              />
                            </li>
                            <li className="list-inline-item"><h5>Quantity & type</h5>
                              <input 
                                type='text'
                                name='quantity'
                                value={this.state.quantity}
                                onChange={this.onChange}
                                error={errors.quantity}
                              />
                              <select
                                name='type'
                                value={this.state.type}
                                onChange={this.onChange}
                                error={errors.type}
                              >
                                {selectOptions}
                              </select>
                            </li>
                            <li className="list-inline-item"><h5>Calories</h5>
                              <CardFieldGroup
                                name='calories'
                                value={this.state.calories}
                                onChange={this.onChange}
                                error={errors.calories}
                              />
                            </li>
                            <li className="list-inline-item"><h5>Protein</h5>
                              <CardFieldGroup
                                name='protein'
                                value={this.state.protein}
                                onChange={this.onChange}
                                error={errors.protein}
                              />
                            </li>
                            <li className="list-inline-item"><h5>Fat</h5>
                              <CardFieldGroup
                                name='fat'
                                value={this.state.fat}
                                onChange={this.onChange}
                                error={errors.fat}
                              />
                            </li>
                            <li className="list-inline-item"><h5>Carbohydrates</h5>
                              <CardFieldGroup
                                name='carbohydrates'
                                value={this.state.carbohydrates}
                                onChange={this.onChange}
                                error={errors.carbohydrates}
                              />
                            </li>
                          </ul>
                            <input type="submit" value="Save" className="font-weight-bold btn btn-secondary btn-block bg-primary" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="admin-section-two">
          <ListAdmin />
        </section>
      </div>
    )
  }
};

Admin.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  admin: PropTypes.object.isRequired,
  saveItem: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  findItems: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  errors: state.errors,
  auth: state.auth,
  admin: state.admin
});

export default connect( mapStateToProp, { saveItem, findItems, clearError } )(Admin);

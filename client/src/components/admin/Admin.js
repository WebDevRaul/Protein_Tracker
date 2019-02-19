import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import CardFieldGroupNoLabel from '../common/components/CardFieldGroupNoLabel';
import ListAdmin from './List_Items';

// Redux
import { connect } from 'react-redux';
import { saveItem, findItems } from '../../redux/actions/admin';
import { clearError } from '../../redux/actions/commonAction';

// Common
import isEmpty from '../common/isEmpty';

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
    // this.setState({
    //   product_name: '',
    //   protein: '',
    //   quantity: '',
    //   type: '',
    //   carbohydrates: '',
    //   fat: '',
    //   calories: ''
    // });
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
        <section className="admine-section-on">
          <div className="container-fluid">
            <div className='row'>
              <div className='col-12'>
                <div className="m-5 text-primary">
                  <h3><i className='card-header-h4'>Admin</i></h3>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <div className='text-primary text-center mb-3'>
                      <h3 className=''>Add product</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <form noValidate onSubmit={this.onSubmit}>
                <div className='row'>
                  <div className='offset-1 col-10 offset-md-3 col-md-6 offset-lg-3 col-lg-6'>
                    <div className='row'>
                      <div className='col-12'>
                        <h5>Product Name:</h5>
                        <CardFieldGroupNoLabel
                          name='product_name'
                          value={this.state.product_name}
                          onChange={this.onChange}
                          error={errors.product_name}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-6'>
                          <h5>Quantity</h5>
                          <input
                            className={classnames('form-control mb-3 form-control-xsm', {'is-invalid' : !isEmpty(errors.quantity)})}
                            type='text'
                            name='quantity'
                            value={this.state.quantity}
                            onChange={this.onChange}
                          />
                          {errors.quantity && <div className='invalid-feedback'>{errors.quantity}</div>}
                        </div>
                      <div className='col-6'>
                        <h5>Type</h5>
                        <select
                          className={classnames('form-control mb-3 form-control-xsm', {'is-invalid' : !isEmpty(errors.type)})}
                          name='type'
                          value={this.state.type}
                          onChange={this.onChange}
                        >
                          {selectOptions}
                        </select>
                        {errors.type && <div className='invalid-feedback'>{errors.type}</div>}
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-6'>
                        <h5>Calories</h5>
                        <CardFieldGroupNoLabel
                          name='calories'
                          value={this.state.calories}
                          onChange={this.onChange}
                          error={errors.calories}
                        />
                      </div>
                      <div className='col-6'>
                        <h5>Protein</h5>
                        <CardFieldGroupNoLabel
                          name='protein'
                          value={this.state.protein}
                          onChange={this.onChange}
                          error={errors.protein}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-6'>
                        <h5>Fat</h5>
                        <CardFieldGroupNoLabel
                          name='fat'
                          value={this.state.fat}
                          onChange={this.onChange}
                          error={errors.fat}
                        />
                      </div>
                      <div className='col-6'>
                        <h5>Carbohydrates</h5>
                        <CardFieldGroupNoLabel
                          name='carbohydrates'
                          value={this.state.carbohydrates}
                          onChange={this.onChange}
                          error={errors.carbohydrates}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <input 
                          type="submit" 
                          value="Save" 
                          className="font-weight-bold btn btn-secondary btn-block bg-primary mt-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';
import { saveNewQuantity, update_Offline } from '../../redux/actions/dashboard';

// Common
import validateProductQty from '../common/validator/productQty';
import isEmpty from '../common/isEmpty';

class ItemDashboard extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      newQuantity: '',
      errors: {}
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { errors } = this.state;

    // Reset the errors
    if (!isEmpty(errors)) {
      setTimeout(() => { this.setState({ errors: {} }) }, 3000);
    }
  }


  onClick = i => () => {
    this.props.onClickFunc(i);
  };
  
  onChange = (e) => {
    this.setState({ newQuantity: e.target.value });
  };
  
  onEdit = () => {
    this.setState({ edit: true });
  };
  
  onSave = () => {
    const { newQuantity } = this.state;
    const { id, table_id, true_calories, true_protein, true_fat, true_carbohydrates, type, true_quantity } = this.props;
    const userID = this.props.auth.user.id;

    // Validation
    const { errors, isValid } = validateProductQty(newQuantity);

    // Check validation
    if (!isValid) {
      // Set Errors
      this.setState({ errors });
    } else {

      let newCalories, newProtein, newFat, newCarbohydrates;

      const mlFunc = (a, b, c) => {
        const d = (Number(a) / Number(b)) * Number(c)
        return d;
      }

      // Update new values
      if (type === 'pc.') {
        newCalories = String(Math.round(Number(true_calories) * Number(newQuantity)));
        newProtein = String(Math.round(Number(true_protein) * Number(newQuantity)));
        newFat= String(Math.round(Number(true_fat) * Number(newQuantity)));
        newCarbohydrates = String(Math.round(Number(true_carbohydrates) * Number(newQuantity)));
      } else if(type === 'ml.' || type === 'gr.') {
        newCalories =  String(Math.round(mlFunc(newQuantity, true_quantity, true_calories)))
        newProtein =  String(Math.round(mlFunc(newQuantity, true_quantity, true_protein)))
        newFat =  String(Math.round(mlFunc(newQuantity, true_quantity, true_fat)))
        newCarbohydrates =  String(Math.round(mlFunc(newQuantity, true_quantity, true_carbohydrates)))
      }

      const newQuantityData =  { id, table_id, newQuantity, newCalories, newProtein, newFat, newCarbohydrates, userID };
      this.setState({ edit: false });
      this.setState({ newQuantity: '' })
      this.props.saveNewQuantity(newQuantityData);
      this.props.update_Offline(newQuantityData);
    }
  };


  render() {
    const { product_name, quantity, type, calories, protein, fat, carbohydrates, id, icon} = this.props;
    const { edit, newQuantity, errors } = this.state;

    const input = (
      <div>
        <div className='row no-gutters'>
          <div className='col-7'>
            <input 
            className={classnames('col p-0', {'special-border' : !isEmpty(errors.productQty)})}
            type = 'text'
            value = { newQuantity }
            onChange = {this.onChange}
            placeholder = {quantity}
            autoFocus
          />
          </div>
          <div className='col-1'>
            <span className='ml-2 hover'><i onClick={this.onSave} className="fas fa-check"></i></span>
          </div>
            {errors.productQty && <div className='text-danger font-weight-bold'>{errors.productQty}</div>}
        </div>
      </div>
    )

    const paragraph = (
      <div className='d-flex'>
        <p onClick={this.onEdit} className='dashboard-edit-product' >{quantity}</p>
        <span className='pl-2'>{type}</span>
      </div>
    )  
    
    return (
      <div key={id}>
        <div className='row'>
          <div className='col'>
            <div className='text-capitalize'>
              <p className='ml-4'>{product_name}</p>
              <div className='invalid-feedback'>{errors.productQty}</div>
            </div>
          </div>
        </div>
        <div key={id} className='row paper no-gutters text-center'>
          <div className={classnames('col', {'col-4' : edit})}>
            <div>
              {edit ? input : paragraph}
            </div>
          </div>
          <div className={classnames('col', {'col-2' : edit})}><p>{calories}</p></div>
          <div className={classnames('col', {'col-2' : edit})}><p>{protein}</p></div>
          <div className={classnames('col', {'col-2' : edit})}><p>{fat}</p></div>
          <div className={classnames('col', {'col-2' : edit})}><p className={classnames('', {'d-flex' : edit})}>{carbohydrates}<span className={classnames('hover ml-3', {'margin-1' : edit})} onClick={this.onClick(id)} ><i className={icon}></i></span></p></div>
        </div>
      </div>
    )
  }
};

ItemDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  true_calories: PropTypes.string,
  true_protein: PropTypes.string,
  true_fat: PropTypes.string,
  true_carbohydrates: PropTypes.string,
  product_name: PropTypes.string.isRequired,
  table_i: PropTypes.string,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string,
  calories: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.string.isRequired,
  id: PropTypes.string,
  icon: PropTypes.string,
  onClickFunc: PropTypes.func,
  saveNewQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps , { saveNewQuantity, update_Offline })(ItemDashboard);
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { saveNewQuantity, update_Offline } from '../../redux/actions/dashboard';

class ItemDashboard extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      newQuantity: '',
    }
  };



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
    const { id, table_id, true_calories, true_protein, true_fat, true_carbohydrates } = this.props;

    // Update new values
    const newCalories = String(Number(true_calories) * Number(newQuantity));
    const newProtein = String(Number(true_protein) * Number(newQuantity));
    const newFat= String(Number(true_fat) * Number(newQuantity));
    const newCarbohydrates = String(Number(true_carbohydrates) * Number(newQuantity));

    const newQuantityData =  { id, table_id, newQuantity, newCalories, newProtein, newFat, newCarbohydrates };
    this.setState({ edit: false });
    this.props.saveNewQuantity(newQuantityData);
    this.props.update_Offline(newQuantityData);
  };


  render() {
    const { product_name, quantity, type, calories, protein, fat, carbohydrates, id } = this.props;
    const { edit, newQuantity } = this.state;

    const input = (
      <input 
        type = 'text'
        value = { newQuantity }
        onChange = {this.onChange}
        placeholder = {quantity}
      />
    )
    return (
      <div key={id}>
        <ul className='navbar list-inline paper'>
          <li className='list-inline-item'>{product_name}</li>
          <li className='list-inline-item'>
            <span onClick={this.onEdit}>{edit ? input : quantity} {type} </span>
            <span onClick={this.onSave}>{edit ? <i className="fas fa-check"></i> : null}</span>
          </li>
          <li className='list-inline-item'>{calories}</li>
          <li className='list-inline-item'>{protein}</li>
          <li className='list-inline-item'>{fat}</li>
          <li className='list-inline-item'>{carbohydrates}</li>
          <span className='hover' onClick={this.onClick(id)} ><i className={this.props.class}></i></span>
        </ul>
      </div>
    )
  }
};

ItemDashboard.propTypes = {
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
  class: PropTypes.string,
  onClickFunc: PropTypes.func,
  saveNewQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});


export default connect(mapStateToProps , { saveNewQuantity, update_Offline })(ItemDashboard);
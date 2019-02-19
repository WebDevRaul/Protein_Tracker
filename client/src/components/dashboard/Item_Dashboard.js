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
    const userID = this.props.auth.user.id;

    // Update new values
    const newCalories = String(Number(true_calories) * Number(newQuantity));
    const newProtein = String(Number(true_protein) * Number(newQuantity));
    const newFat= String(Number(true_fat) * Number(newQuantity));
    const newCarbohydrates = String(Number(true_carbohydrates) * Number(newQuantity));

    const newQuantityData =  { id, table_id, newQuantity, newCalories, newProtein, newFat, newCarbohydrates, userID };
    this.setState({ edit: false });
    this.props.saveNewQuantity(newQuantityData);
    this.props.update_Offline(newQuantityData);
  };


  render() {
    const { product_name, quantity, type, calories, protein, fat, carbohydrates, id, icon} = this.props;
    const { edit, newQuantity } = this.state;

    const input = (
      <input 
        type = 'text'
        value = { newQuantity }
        onChange = {this.onChange}
        placeholder = {quantity}
        autoFocus
      />
    )
    return (
      <div key={id}>
        <div className='row'>
          <div className='col'>
            <div className='text-capitalize'>
              <p className='ml-2'>{product_name}</p>
            </div>
          </div>
        </div>
        <div key={id} className='row paper no-gutters'>
          <div className='col text-center'>
            <p
              onClick={this.onEdit}
            >{edit ? input : quantity} {type}</p>
            <p
              onClick={this.onSave}
            >
              {edit ? <i className="fas fa-check"></i> : null}
            </p>
          </div>
          <div className='col text-center'><p>{calories}</p></div>
          <div className='col text-center'><p>{protein}</p></div>
          <div className='col text-center'><p>{fat}</p></div>
          <div className='col text-center'><p>{carbohydrates}<span className='ml-3 hover' onClick={this.onClick(id)} ><i className={icon}></i></span></p></div>
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
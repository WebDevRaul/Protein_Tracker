import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { saveNewQuantity } from '../../redux/actions/dashboard';

class ItemDashboard extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      newQuantity: '',
    }
  };



  onClick = id => () => {
    this.props.onClickFunc(id);
  };
  
  onChange = (e) => {
    this.setState({ newQuantity: e.target.value });
  };
  
  onEdit = () => {
    this.setState({ edit: true });
  };
  
  onSave = () => {
    const { newQuantity } = this.state;
    const { id } = this.props;
    const newQuantityData =  { newQuantity, id }
    this.setState({ edit: false });
    this.props.saveNewQuantity(newQuantityData);
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
  product_name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string,
  calories: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.string.isRequired,
  Id: PropTypes.string,
  class: PropTypes.string,
  onClickFunc: PropTypes.func
};

const mapStateToProps = state => ({
  error: state.errors
})


export default connect(mapStateToProps , { saveNewQuantity })(ItemDashboard);
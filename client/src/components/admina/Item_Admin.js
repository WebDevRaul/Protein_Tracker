import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemAdmin extends Component {

  onClick = id => () => {
    this.props.onClickFunc(id)
  }

  render() {
    const { product_name, quantity, type, calories, protein, fat, carbohydrates, id, icon } = this.props;
    return (
      <div key={id} className='row admin-paper no-gutters '>
        <div className='col m-auto text-capitalize overflow-auto'><p>{product_name}</p></div>
        <div className='col m-auto text-center'><p>{quantity} <span>{type}</span></p></div>
        <div className='col m-auto text-center'><p>{calories}</p></div>
        <div className='col m-auto text-center'><p>{protein}</p></div>
        <div className='col m-auto text-center'><p>{fat}</p></div>
        <div className='col m-auto text-center'><p>{carbohydrates}<span className='ml-3 hover' onClick={this.onClick(id)} ><i className={icon}></i></span></p></div>
      </div>
    )
  }
};

ItemAdmin.propTypes = {
  product_name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string,
  calories: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.string.isRequired,
  Id: PropTypes.string,
  icon: PropTypes.string,
  onClickFunc: PropTypes.func,
};


export default ItemAdmin;
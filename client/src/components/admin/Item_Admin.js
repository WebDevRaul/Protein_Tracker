import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemAdmin extends Component {

  onClick = id => () => {
    this.props.onClickFunc(id)
  }

  render() {
    const { product_name, quantity, type, calories, protein, fat, carbohydrates, id } = this.props;
    return (
      <div key={id}>
        <ul className='navbar list-inline paper'>
          <li className='list-inline-item'>{product_name}</li>
          <li className='list-inline-item'>{quantity}{type}</li>
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

ItemAdmin.propTypes = {
  product_name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string,
  calories: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.string.isRequired,
  Id: PropTypes.string,
  class: PropTypes.string,
  onClickFunc: PropTypes.func,
};


export default ItemAdmin;
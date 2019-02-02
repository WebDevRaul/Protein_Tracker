import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

  onClick = id => () => {
    this.props.onClickFunc(id)
  }

  render() {
    return (
      <div key={this.props.id}>
        <ul className='navbar list-inline paper'>
          <li className='list-inline-item'>{this.props.product_name}</li>
          <li className='list-inline-item'>{this.props.quantity}{this.props.type}</li>
          <li className='list-inline-item'>{this.props.calories}</li>
          <li className='list-inline-item'>{this.props.protein}</li>
          <li className='list-inline-item'>{this.props.fat}</li>
          <li className='list-inline-item'>{this.props.carbohydrates}</li>
          <span className='hover' onClick={this.onClick(this.props.id)} ><i className={this.props.class}></i></span>
        </ul>
      </div>
    )
  }
};

Item.propTypes = {
  product_name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string,
  calories: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.string.isRequired,
  Id: PropTypes.string,
  class: PropTypes.string,
};


export default Item;
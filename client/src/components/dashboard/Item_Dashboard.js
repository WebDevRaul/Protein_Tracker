import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../common/isEmpty';

class ItemDashboard extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
    }
  };

  static getDerivedStateFromProps(nextProps, prevState){
    const {quantity} = nextProps;
    if( quantity !== prevState.quantity ) {
      return {quantity};
    }
    else return null;
  }



  onClick = id => () => {
    this.props.onClickFunc(id)
  };

  onEdit = () => {
    this.setState({ edit: true });
    console.log(this.state.edit);
    console.log(this.props.id);
  };

  onSave = () => {
    this.setState({ edit: false })
  }

  onChange = () => {

  };

  render() {
    const { product_name, type, calories, protein, fat, carbohydrates, id } = this.props;
    const { edit, quantity } = this.state;

    const input = (
      <input 
        type = 'text'
        value = { quantity }
        onChange = {this.onChange}
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


export default ItemDashboard;
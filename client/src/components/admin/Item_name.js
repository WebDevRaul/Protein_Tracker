import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Redux
import { connect } from 'react-redux';
import { deleteItem } from '../../redux/actions/admin';

class ItemName extends Component {

  onClick = id => () => {
    this.props.deleteItem(id)
  }

  render() {
    return (
      <div key={this.props.key}>
        <ul className='navbar list-inline paper'>
          <li className='list-inline-item'>{this.props.product_name}</li>
          <li className='list-inline-item'>{this.props.quantity}{this.props.type}</li>
          <li className='list-inline-item'>{this.props.calories}</li>
          <li className='list-inline-item'>{this.props.protein}</li>
          <li className='list-inline-item'>{this.props.fat}</li>
          <li className='list-inline-item'>{this.props.carbohydrates}</li>
          <span className='hover' onClick={this.onClick(this.props.Id)} ><i className={this.props.class}></i></span>
        </ul>
      </div>
    )
  }
};

ItemName.propTypes = {
  errors: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  product_name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string,
  calories: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.string.isRequired,
  id: PropTypes.string,
  class: PropTypes.string,
};

const mapStateToProps = state => ({
  errors: state.errors
})


export default connect( mapStateToProps, { deleteItem } )(ItemName);
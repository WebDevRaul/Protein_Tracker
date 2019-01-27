
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions/delete_item';

// Common
import isEmpty from './common/isEmpty';

class ItemName extends Component {

  onClick = id => () => {
    this.props.deleteItem(id)
  }

  
  render() {
    let item;
    const { items } = this.props.items;
    // Check for empty items
    if (!isEmpty(items)) {
      item = items.map(i => 
        <div key={i._id}>
          <ul className='navbar list-inline'>
            <li className='list-inline-item'>{i.product_name}</li>
            <li className='list-inline-item'>{i.calories}</li>
            <li className='list-inline-item'>{i.protein}</li>
            <li className='list-inline-item'>{i.fat}</li>
            <li className='list-inline-item'>{i.carbohydrates}</li>
            <span onClick={this.onClick(i._id)} >X</span>
          </ul>
        </div>
      )
    }
    return (
      <div>
        <ul className='navbar list-inline'>
          <li className='list-inline-item'>Product Name: </li>
          <li className='list-inline-item'>Calories</li>
          <li className='list-inline-item'>Proteins</li>
          <li className='list-inline-item'>Fat</li>
          <li className='list-inline-item'>Carbohydrates</li>
        </ul>
        {item}
      </div>
    )
  }
};

ItemName.propTypes = {
  items: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect( mapStateToProps, { deleteItem } )(ItemName);
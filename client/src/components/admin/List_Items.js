import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import ItemAdmin from './Item_Admin';

// Redux
import { connect } from 'react-redux';
import { deleteItem  } from '../../redux/actions/admin';

// Common
import isEmpty from '../common/isEmpty';

class ListItems extends Component {

  onDelete=(id)=> {
    this.props.deleteItem(id)
  };

  render() {
    let item;
    const { items } = this.props.admin;
    // Check for empty items
    if (!isEmpty(items)) {
      item = items.map(i => 
        <ItemAdmin
          key={i._id}
          product_name={i.product_name}
          quantity={i.quantity}
          type={i.type}
          calories={i.calories}
          protein={i.protein}
          fat={i.fat}
          carbohydrates={i.carbohydrates}
          id={i._id}
          onClickFunc={this.onDelete}
        />
      )
    }
    return (
      <div className='items-name mt-5 mb-5'>
        <div className='container'>
          <ItemAdmin
            product_name= 'Product Name:'
            quantity= 'Quantity'
            calories= 'Calories'
            protein= 'Proteins'
            fat='Fat'
            carbohydrates= 'Carbohydrates'
          />
          {item}
        </div>
      </div>
    )
  }
};

ListItems.propTypes = {
  admin: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect( mapStateToProps, { deleteItem  } )(ListItems);
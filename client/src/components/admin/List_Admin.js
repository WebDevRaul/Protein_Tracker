import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import ItemAdmin from './Item_Admin';

// Redux
import { connect } from 'react-redux';
import { deleteItem  } from '../../redux/actions/admin';

// Common
import isEmpty from '../common/isEmpty';

class ListAdmin extends Component {

  onDelete=(id)=> {
    this.props.deleteItem(id)
  };

  render() {
    let item;
    const { items } = this.props.admin;

    const compare = (a, b) => {
      // Use toUpperCase() to ignore character casing
      const nameA = a.product_name.toUpperCase();
      const nameB = b.product_name.toUpperCase();
    
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    };

    // Sort
    items.sort(compare)
    
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
          icon='far fa-times-circle text-danger'
          onClickFunc={this.onDelete}
        />
      )
    };
    return (
      <div className='list-admin mt-5'>
        <div className='container'>
          <ItemAdmin
            product_name= 'Name:'
            quantity= 'Qty.'
            calories= 'Cal.'
            protein= 'Prot.'
            fat='Fat'
            carbohydrates= 'Carb.'
          />
          {item}
        </div>
      </div>
    )
  }
};

ListAdmin.propTypes = {
  admin: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect( mapStateToProps, { deleteItem  } )(ListAdmin);
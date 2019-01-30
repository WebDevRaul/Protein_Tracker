import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import ItemName from './Item_name';

// Redux
import { connect } from 'react-redux';

// Common
import isEmpty from '../common/isEmpty';

class ItemsName extends Component {
  render() {
    let item;
    const { items } = this.props.admin;
    // Check for empty items
    if (!isEmpty(items)) {
      item = items.map(i => 
        <ItemName
          key={i._id}
          product_name={i.product_name}
          calories={i.calories}
          protein={i.protein}
          fat={i.fat}
          carbohydrates={i.carbohydrates}
          Id={i._id}
          class='far fa-times-circle fa-red'
        />
      )
    }
    return (
      <div className='items-name mt-5 mb-5'>
        <div className='container'>
          <ItemName
            product_name= 'Product Name:'
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

ItemsName.propTypes = {
  admin: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect( mapStateToProps, {} )(ItemsName);
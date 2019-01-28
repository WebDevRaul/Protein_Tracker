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
    const { items } = this.props.items;
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
          text='x'
        />
      )
    }
    return (
      <div>
        <ItemName
          product_name= 'Product Name:'
          calories= 'Calories'
          protein= 'Proteins'
          fat='Fat'
          carbohydrates= 'Carbohydrates'
        />
        {item}
      </div>
    )
  }
};

ItemsName.propTypes = {
  items: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect( mapStateToProps, {} )(ItemsName);
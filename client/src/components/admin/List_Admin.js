import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import ItemAdmin from './Item_Admin';
import Modal from './Modal';

// Redux
import { connect } from 'react-redux';
import { deleteItem  } from '../../redux/actions/admin';

// Common
import isEmpty from '../common/isEmpty';

class ListAdmin extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      productName: '',
      id: '',
    }
  }

  onDelete = id => {
    const { items } = this.props.admin;
    // Find the product for Delete
    const name = name => name._id === id;
    const productName = items.find(name);

    this.setState({ productName, id, modal: true })
  };

  onModalDelete = () => {
    const { id } = this.state;
    this.props.deleteItem(id);
    this.setState({ modal: false })
  }

  onModalCancel = () => {
    this.setState({ modal: false })
  }
  
  render() {
    const { items } = this.props.admin;
    const { modal } = this.state;
    const { product_name, calories, protein, fat, carbohydrates } = this.state.productName;
    let item;
  
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
      <div className='list-admin'>
        <div className='list-admin'>
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
          <Modal
            onModalCancel={this.onModalCancel}
            onModalDelete={this.onModalDelete}
            modal={modal}
            product_name={product_name}
            calories={calories}
            protein={protein}
            fat={fat}
            carbohydrates={carbohydrates}
          />
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
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
  constructor() {
    super();
    this.state = {
      productName: ''
    }
  }

  onDelete=(id)=> {
    const { items } = this.props.admin;
    // Find the product for Delete
    const name = name => name._id === id;
    const productName = items.find(name);

    // this.props.deleteItem(id);
    this.setState({ productName })
  };
  
  render() {
    const { items } = this.props.admin;
    const { product_name } = this.state.productName;
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
      <div>
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
        <div className="">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{product_name}</h5>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                <button type="button" className="btn btn-primary">Cancel</button>
              </div>
            </div>
          </div>
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
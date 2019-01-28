import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Redux
import { connect } from 'react-redux';
import { deleteItem } from '../../redux/actions/delete_item';

class ItemName extends Component {

  onClick = id => () => {
    this.props.deleteItem(id)
  }

  render() {
    return (
      <div key={this.props.key}>
        <ul className='navbar list-inline'>
          <li className='list-inline-item'>{this.props.product_name}</li>
          <li className='list-inline-item'>{this.props.calories}</li>
          <li className='list-inline-item'>{this.props.protein}</li>
          <li className='list-inline-item'>{this.props.fat}</li>
          <li className='list-inline-item'>{this.props.carbohydrates}</li>
          <span onClick={this.onClick(this.props.Id)} >{this.props.text}</span>
        </ul>
      </div>
    )
  }
};

ItemName.propTypes = {
  
};

const mapStateToProps = state => ({
  errors: state.errors
})


export default connect( mapStateToProps, { deleteItem } )(ItemName);
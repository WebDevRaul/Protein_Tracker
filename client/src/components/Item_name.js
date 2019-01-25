import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Common
import isEmpty from './common/isEmpty';

class ItemName extends Component {
  render() {
    let item;
    const { items } = this.props.items;
    // Check for empty items
    if (!isEmpty(items)) {
      item = items[0].map(i => 
        <div key={i.product_name}>
          <p>{i.product_name}</p>
          <p>{i.fat}</p>
        </div>);
    }
    return (
      <div>
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

export default connect( mapStateToProps, {} )(ItemName);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import TableFieldGroup from '../common/components/TableFieldGroup';
import SelectFieldGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      productVal: ''
    }
  };

  onChange = (e) => {
    this.setState({ productVal: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Table
          </div>
          <div className='card-body'>
            <SelectFieldGroup
              name='productList'
              value={this.state.productVal}
              onChange={this.onChange}
              items={this.props.items}
            />
          </div>
          <div className="card-body">
            <ul>
              <li>
                <ul className='navbar list-inline'>
                  <li className='list-inline-item'>Quantity</li>
                  <li className='list-inline-item'>Product</li>
                  <li className='list-inline-item'>Calories</li>
                  <li className='list-inline-item'>Proteins</li>
                  <li className='list-inline-item'>Fat</li>
                  <li className='list-inline-item'>Carbohydrates</li>
                </ul>
              </li>
              {/* <li><TableFieldGroup /></li> */}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

Table.propTypes = {
  items: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  items: state.items
})

export default connect( mapStateToProps, {  })(Table)

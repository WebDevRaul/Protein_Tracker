import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/admin';
import SelectListGroup from '../common/components/SelectFieldGroup';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      table: '',
    }
  }

  componentDidMount(){
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.findItems(this.props.auth.user.id)
    }
  }

  onClick = () => {
    this.setState({ id: this.state.id + 1 });
  };

  onChangeSelect = (e) => {
    this.setState({ table: e.target.value })
  };

  onClickSelect = (e) => {

  }

  
  render() {
    const { id } = this.state;
    const table = [
      {product_name: 'breakfast', _id: 'breakfast'},
      {product_name: 'lunch', _id: 'lunch'},
      {product_name: 'diner', _id: 'diner'},
      {product_name: 'snack', _id: 'snack'},
    ]
    return (
      <div className='container'>
        <SelectListGroup
          name='selectTable'
          value={this.state.table}
          onChange={this.onChangeSelect}
          onClick={this.onClickSelect}
          items={table}
        />
        {
          [...Array(id)].map((key, i) => <Table key={i} id={i} />)
        }
        <button onClick={this.onClick} >add table</button>
      </div>
    )
  }
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect( mapStateToProps, { findItems } )(Dashboard)
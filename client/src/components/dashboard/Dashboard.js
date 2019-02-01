import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';
import SelectListGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/admin';
import { findProducts } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      breakfast: false,
      diner: false,
      snack: false,
      lunch: false,
      table: '',
    }
  }

  componentDidMount(){
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.findItems(this.props.auth.user.id);
      this.props.findProducts(this.props.auth.user.id);
    };
  };

  componentDidUpdate() {
    const { breakfast, lunch, diner, snack} = this.props.dashboard;
    const breakfastState = this.state.breakfast;

    // Update breakfast state && show breakfast table
    if (!isEmpty(breakfast) && breakfastState === false) {
      this.setState({ breakfast: true })
    };
  };

  onChangeSelect = (e) => {
    this.setState({ table: e.target.value })
  };

  onClickSelect = (e) => {
    const { table } = this.state;
    const update = data => this.setState({ [data]: true });
    update(table);
  }

  
  render() {
    const { breakfast, diner, snack, lunch } = this.state;
    const table = [
      {product_name: 'breakfast', _id: 'breakfast'},
      {product_name: 'lunch', _id: 'lunch'},
      {product_name: 'diner', _id: 'diner'},
      {product_name: 'snack', _id: 'snack'},
    ];


    return (
      <div className='container'>
        <SelectListGroup
          name='selectTable'
          value={this.state.table}
          onChange={this.onChangeSelect}
          onClick={this.onClickSelect}
          items={table}
          option='Select Table'
        />
        { breakfast ? <Table id={'breakfast'} /> : null }
        { lunch ? <Table id={'lunch'} /> : null }
        { diner ? <Table id={'diner'} /> : null }
        { snack ? <Table id={'snack'} /> : null }
      </div>
    )
  }
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired,
  findItems: PropTypes.func.isRequired,
  findProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  dashboard: state.dashboard
});

export default connect( mapStateToProps, { findItems, findProducts } )(Dashboard);
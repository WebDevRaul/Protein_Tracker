import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';
import SelectListGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/admin';
import { findProducts } from '../../redux/actions/dashboard';
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
    const { breakfast } = this.state;

    // Fetch items
    if (isAuthenticated) {
      this.props.findItems(this.props.auth.user.id);
      this.props.findProducts(this.props.auth.user.id);
    };

    if (!isEmpty(breakfast) && breakfast === false ) {
      this.setState({ breakfast: true })
    }
  };

  onClick = () => {
    this.setState({ id: this.state.id + 1 });
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
  findItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect( mapStateToProps, { findItems, findProducts } )(Dashboard);
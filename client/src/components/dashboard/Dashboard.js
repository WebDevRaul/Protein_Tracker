import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';
import SelectListGroup from '../common/components/SelectFieldGroup';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/admin';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      breakfast: false,
      lunch: false,
      diner: false,
      snack: false,
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
    const { table } = this.state;
    const update = data => this.setState({ [data]: true });
    update(table);
  }

  
  render() {
    const { breakfast, lunch, diner, snack } = this.state;
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
          option='Select Table'
        />
        { breakfast ? <Table id={'breakfast'} /> : null }
        { diner ? <Table id={'diner'} /> : null }
        { lunch ? <Table id={'lunch'} /> : null }
        { snack ? <Table id={'snack'} /> : null }
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
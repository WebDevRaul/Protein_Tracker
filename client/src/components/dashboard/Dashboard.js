import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/find_items';

class Dashboard extends Component {

  componentDidMount(){
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.findItems(this.props.auth.user.id)
    }
  }
  
  render() {
    return (
      <div className='container'>
        <Table />
      </div>
    )
  }
};

Dashboard.propTypes = {

}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect( mapStateToProps, { findItems } )(Dashboard)
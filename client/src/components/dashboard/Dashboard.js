import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';

// Redux
import { connect } from 'react-redux';

class Dashboard extends Component {
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
  errors: state.errors
});

export default connect( mapStateToProps, {} )(Dashboard)
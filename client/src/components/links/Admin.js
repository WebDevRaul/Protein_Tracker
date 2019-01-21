import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <div>
        admin
      </div>
    )
  }
};

Admin.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect( mapStateToProp, {} )(Admin);

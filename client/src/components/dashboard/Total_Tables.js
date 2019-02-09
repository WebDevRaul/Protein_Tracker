import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class Total_Tables extends Component {
  render() {
    return (
      <div>
        <div className="card border-success mb-3">
          <div className="card-header bg-transparent border-success">target</div>
          <div className="card-body text-success">
            actual
          </div>
          <div className="card-footer bg-transparent border-success">dif</div>
        </div>
      </div>
    )
  }
};

Total_Tables.propTypes = {
  totalSum: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  totalSum: state.totalSum
});

export default connect(mapStateToProps, {})(Total_Tables);

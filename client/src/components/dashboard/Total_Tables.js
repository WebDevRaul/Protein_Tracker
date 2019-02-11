import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Target from './Target';
import Actual from './Actual';

// Redux
import { connect } from 'react-redux';


class TotalTables extends Component {
  render() {
    return (
      <div>
        <div className="card border-success mb-3">
          <div className="card-header bg-transparent border-success">
            <Target />
          </div>
          <div className="card-body text-success">
            <ul className='navbar list-inline paper'>
              <Actual />
            </ul>
          </div>
          <div className="card-footer bg-transparent border-success">dif</div>
        </div>
      </div>
    )
  }
};

TotalTables.propTypes = {
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {})(TotalTables);

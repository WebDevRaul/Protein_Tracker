import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';

class DailyTarget extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
    }
  };

  calculate = () => {
    this.setState({ form: !this.state.form })
  }
  render() {
    const { form } = this.state;
    return (
      <div>
        <div className="card paper">
          <div className="card-header bg-transparent">
            <span
              onClick={this.calculate}
            >edit</span>
          </div>
          <div className={classnames("card-body", {'d-none' : !form})}>
            <p>body</p>
          </div>
        </div>
      </div>
    )
  }
};

DailyTarget.propTypes = {

};

const mapStateToProps = state => ({});

export default connect( mapStateToProps, {} )(DailyTarget);

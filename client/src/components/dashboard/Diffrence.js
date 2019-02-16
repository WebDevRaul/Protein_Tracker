import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class Diffrence extends Component {
  render() {
    const { actual, target } = this.props.calculator;
    const diffrence = 'll';

    return (
      <div>
        <ul className='navbar list-inline paper'>
        </ul>
      </div>
    )
  }
};

Diffrence.propTypes = {
  calculator: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  calculator: state.calculator
});

export default connect(mapStateToProps, {})(Diffrence);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { collectActual } from '../../redux/actions/dashboard';

// Common
import isEmpty from '../common/isEmpty';

class Actual extends Component {
  render() {
    const { actual } = this.props.calculator
    // const numbers = actual.map(i => <li key={Object.entries(i)} className='list-inline-item'>{Object.keys(i)} :  {Object.values(i)}</li>)
    const number = Object.entries(actual).map(i => <li key={Object.entries(i)} className='list-inline-item'>
    {Object.values(i)[0]}: {Object.values(i)[1]}
    </li>);
    console.log(number)
    return (
      <div>
        <ul className='navbar list-inline paper'>
          {number}
        </ul>
      </div>
    )
  }
};

Actual.propTypes = {
  calculator: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  calculator: state.calculator
});

export default connect(mapStateToProps, {})(Actual);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Link to='/register'>
          register
        </Link>
        <br />
        <Link to='/login'>
          login
        </Link>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <Link to='/home'>
          Logo
        </Link>
      </div>
    )
  }
}

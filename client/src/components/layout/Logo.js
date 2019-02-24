import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <div className='mt-3 mr-5'>
        <Link to='/home'>
          <p className='m-0'>Protien</p>
          __________
          <p>Tracker</p>
        </Link>
      </div>
    )
  }
}

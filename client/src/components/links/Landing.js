import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-12 p-0">
          <div className="jumbotron text-center bg-info justify-content-center">
            <h1 className="display-4">SITE UNDER CONSTRUCTION</h1>
            <Link to='/home'>
              <p className='text-dark'>Continue</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
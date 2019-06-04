import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='container d-flex'>
          <div className='row no-gutters m-auto'>
            <div className='col d-flex'>
              <div className='m-auto'>
                <div className='home-text m-auto text-center'>
                  <h1 className='mb-5'>Macro Calculator</h1>
                  <h5>New member? <i><Link to='/register'> - Register - </Link></i></h5>
                  <h5>or</h5>
                  <h5><i><Link to='/login'> - Sign in - </Link></i></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

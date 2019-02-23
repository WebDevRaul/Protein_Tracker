import React, { Component } from 'react';

// Components
import Logo from './Logo';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='row border rounded border-primary'>
            <div className='col p-3'>
              <div className='p-2 border-right border-primary'>
                <Logo />
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col'>
                  <p>Info</p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p>Links</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

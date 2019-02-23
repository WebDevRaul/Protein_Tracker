import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Logo from './Logo';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='row border rounded border-primary'>
            <div className='col p-3'>
              <div className='p-2'>
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
                  <div className='text-center m-auto'>
                    <span className='ml-2 mr-2'>
                      <Link to={'/'} target='_blank'>
                        <i className='m-2 fab fa-facebook-f fa-1x'></i>
                      </Link>
                    </span>
                    <span className='ml-2 mr-2'>
                      <Link to={'/'} target='_blank'>
                        <i className='m-2 fab fa-twitter fa-1x'></i>
                      </Link>
                    </span>
                    <span className='ml-2 mr-2'>
                      <Link to={'/'} target='_blank'>
                        <i className='m-2 fab fa-instagram fa-1x'></i>
                      </Link>
                    </span>
                    <span className='ml-2 mr-2'>
                      <Link to={'/'} target='_blank'>
                        <i className='m-2 fab fa-linkedin-in fa-1x'></i>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='text-center font-weight-bold broder-top broder-success pt-4'>
                <p>Copyright &copy; {new Date().getFullYear()} Protein-Tracker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

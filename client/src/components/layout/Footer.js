import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Logo from './Logo';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer bg-dark text-white'>
        <div className='container'>
          <div className='row border-bottom border-primary'>
            <div className='col m-5 border-right border-success'>
              <div className='p-2'>
                <Logo />
              </div>
            </div>
            <div className='col m-2 pl-0 pr-0'>
              <div className='row'>
                <div className='col'>
                  <p className='m-0'>home/about/register/sign in // dashboard/admin</p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <Link to='/about'>
                    <p className='link '>About the project</p>
                  </Link>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='text-center m-auto'>
                    <div className='row'>
                      <div className='col'>
                        <h5 className='float-left'>Contact Us</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-3'>
                        <p className='float-left ml-3 mb-0'>Social media</p>
                      </div>
                      <div className='col'>
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
                    <div className='row'>
                      <div className='col-3'>
                        <p className='float-left ml-3'>tel icon</p>
                      </div>
                      <div className='col'>
                        <p>555-555-5555</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-3'>
                        <p className='float-left ml-3'>Email:</p>
                      </div>
                      <div className='col'>
                        <p className=''>Test@email.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row text-white'>
            <div className='col'>
              <div className='text-center font-weight-bold broder-top broder-success pt-4'>
                <p>Copyright &copy; {new Date().getFullYear()} Savin Raul-Calin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

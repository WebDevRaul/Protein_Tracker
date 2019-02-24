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
                  <p className='m-0'>home/about/register/sign in // dashboard/admin</p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <Link to={'/about'}>
                    <p>About the project</p>
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
                      <div className='col'>
                        <p className='float-left ml-3 mb-0'>Social media</p>
                      </div>
                    </div>
                    <div className='row'>
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
                      <div className='col'>
                        <p className='float-left ml-3 mb-0'>tel icon</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>555-555-5555</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p className='float-left ml-3 mb-0'>Email:</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p className=''>Test@email.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
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

import React from 'react';
import Links from './Links';
import Mobile from './Mobile';
import Email from './Email';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row no-gutters bg-dark text-white'>
        <div className='col-12 col-sm-6'>
          <div className='d-flex justify-content-center align-items-center h-100'
            style={{ minHeight: '50px' }}
          >
            <span className='mr-2'>Copyright &copy; {new Date().getFullYear()}</span>
            <span>Savin Raul-Calin</span>
          </div>
        </div>
        <div className='col-12 col-sm-6'>
          <div className='footer-info ml-5'>
            <h5 className='mb-3'>
              <span className='border-bottom'>Contact Us</span>
            </h5>
            <Links />
            <Mobile />
            <Email />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
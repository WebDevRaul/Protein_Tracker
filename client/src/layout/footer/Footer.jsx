import React from 'react';
import Links from './Links';
import Mobile from './Mobile';
import Email from './Email';

import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row no-gutters'>
        <div className='col-12 col-sm-6'>
          <div className='d-flex justify-content-center align-items-center h-100 font-weight-bold text-primary'
            style={{ minHeight: '50px' }}
          >
            <span className='mr-2'>Copyright &copy; {new Date().getFullYear()}</span>
            <span>Savin Raul-Calin</span>
          </div>
        </div>
        <div className='col-12 col-sm-6'>
          <div className='footer-info pl-5'>
            <h5 className='mb-3 mt-3'>
              <span className='border-bottom text-primary'>Contact Us</span>
            </h5>
            <Links />
            <Mobile />
            <Email />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
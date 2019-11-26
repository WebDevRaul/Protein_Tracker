import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../components/common/button/Custom_Button';

import './responsive.css';

const NotFound = ({ history }) => {

  const onClick = () => history.push('/home');

  return (
    <div className='not-found d-flex justify-content-center align-content-center'>
        <div className='row no-gutters'>
          <div className='col-10 m-auto'>
            <div className='d-flex flex-column align-items-center'>
              <h1 className='text-danger'>Oops!</h1> 
              <h4 className='text-danger mb-0'>404 - Page not found</h4>
              <h5 className='text-muted mb-5 mt-5'>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</h5>
              <CustomButton 
                text='Go Back' 
                isClass='btn-outline-primary text-uppercase font-weight-bold'
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default withRouter(NotFound);
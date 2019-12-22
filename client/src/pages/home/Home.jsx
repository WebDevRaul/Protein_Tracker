import React from 'react';
import { withRouter } from 'react-router-dom';

import './responsive.css';

const Home = ({ history }) => {
  return (
    <div className='home m-2 d-flex flex-column justify-content-center align-items-center'>
      <div className='ml-3 text-center'>
        <h3 className='mt-3 mb-0'>Protein Tracker</h3>
        <h3 className='mb-0'>&</h3>
        <h3 className='mb-2'>Macro Calculator</h3>
        <h5>New member?</h5>
        <h5 className='mt-2'>
          <i className='hover' onClick={() => history.push('/register')}>Register - </i>
          or
          <i className='hover' onClick={() => history.push('/sign-in')}> - Sign in</i>
        </h5>
      </div>
    </div>
  )
}

export default withRouter(Home);
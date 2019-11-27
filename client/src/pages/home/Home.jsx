import React from 'react';
import { withRouter } from 'react-router-dom';

import './responsive.css';

const Home = ({ history }) => {
  return (
    <div className='home m-2 d-flex flex-column justify-content-center align-items-center'>
      <div className='ml-3 text-center'>
        <h3 className='mb-4 mt-4'>Macro Calculator</h3>
        <h5>New member?</h5>
        <h5 className='mt-3'>
          <i onClick={() => history.push('/register')}>- Register -</i>
          or
          <i onClick={() => history.push('/sign-in')}> - Sign in - </i>
        </h5>
      </div>
    </div>
  )
}

export default withRouter(Home);
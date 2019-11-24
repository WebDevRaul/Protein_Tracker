import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home d-flex flex-column justify-content-center align-items-center' 
      style={{ minHeight: 'calc(100vh - 264px)' }}>
      <>
        <h2 className='mb-4 mt-4'>Macro Calculator</h2>
        <h5>New member?</h5>
        <h5>
          <i><Link to='/register'> - Register - </Link></i>
          or
          <i><Link to='/sign-in'> - Sign in - </Link></i>
        </h5>
      </>
    </div>
  )
}

export default Home;
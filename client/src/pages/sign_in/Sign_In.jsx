import React from 'react';

import Form from '../../components/sign_in/Form';

const SignIn = () => {
  return (
    <section className='sign-in d-flex flex-column justify-content-center' 
      // Center the form and 19px for the scrollbar 
      style={{ minHeight: 'calc(100vh - 264px)', paddingRight: '19px' }}
    >
      <div className='row no-gutters'>
        <div className='col-8 col-sm-6 col-md-4 m-auto'>
          <div className="card mt-4 mb-4">
            <div className="card-header d-flex justify-content-center">
              <i className="fas fa-user fa-2x mr-3"></i> 
              <h4 className='mb-0'>Sign In</h4>
            </div>
            <div className="card-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn;
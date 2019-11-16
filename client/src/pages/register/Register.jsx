import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/register/Form';

const Register = ({ history }) => {
  return (
    <section className='register'>
      <div className='row no-gutters'>
        <div className='col-8 col-sm-6 col-md-4 m-auto'>
          <div className="card mt-4 mb-4">
            <div className="card-header d-flex justify-content-center">
              <i className="fas fa-user-plus fa-2x mr-3"></i> 
              <h4 className='mb-0'>Register</h4>
            </div>
            <div className="card-body">
              <Form history={history} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Register.propTypes = {
  history: PropTypes.object.isRequired
}

export default Register;
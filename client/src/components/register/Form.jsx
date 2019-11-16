import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';

import Input from '../common/form/input/Input';
import CustomButton from '../common/button/Custom_Button';

const Form = ({ register, history }) => {
  const [state, setState] = useState({ first_name: 'Joe', last_name: 'Doe', email: 'Jdoe@test.com', password: '123456', password2: '123456'});
  const [error, setError] = useState({ first_name: '', last_name: '', email: '', password: '', password2: ''});
  const { first_name, last_name, email, password, password2 } = state;

  const onChange = e => setState({ [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // validation here
    register({ data: { ...state }, history });
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      <Input
        name='first_name'
        value={first_name}
        label='First Name'
        icon='fas fa-user'
        error={error.first_name}
        onChange={onChange}
      />
      <Input
        name='last_name'
        value={last_name}
        label='Last Name'
        icon='fas fa-user'
        error={error.last_name}
        onChange={onChange}
      />
      <Input
        name='email'
        value={email}
        label='Email'
        type='email'
        icon='fas fa-envelope'
        error={error.email}
        onChange={onChange}
      />
      <Input
        name='password'
        value={password}
        label='Password'
        type='password'
        icon='fas fa-lock'
        error={error.password}
        onChange={onChange}
      />
      <Input
        name='password2'
        value={password2}
        label='Confirm Password'
        type='password2'
        icon='fas fa-lock'
        error={error.password2}
        onChange={onChange}
      />
      <CustomButton 
        text='Submit' 
        isClass='btn-outline-primary w-100 text-uppercase font-weight-bold' 
        isLoading={false} 
        type='submit' 
      />
    </form>
  )
};

Form.propTypes = {
  register: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, { register })(Form);
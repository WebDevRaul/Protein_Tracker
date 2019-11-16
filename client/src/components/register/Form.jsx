import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_isLoading } from '../../redux/selectors/user';
import validateRegister from './validation/validation';

import Input from '../common/form/input/Input';
import CustomButton from '../common/button/Custom_Button';

const Form = ({ register, isLoading, history }) => {
  const [state, setState] = useState({ first_name: 'Joe', last_name: 'Doe', email: 'Jdoe@test.com', password: '123456', password2: '123456'});
  const [error, setError] = useState({ first_name: '', last_name: '', email: '', password: '', password2: ''});
  const { first_name, last_name, email, password, password2 } = state;
  
  const onChange = e => setState({...state, [e.target.name]: e.target.value });
  
  const onFocus = e => {
    const { first_name, last_name, email, password, password2 } = error;
    if(!(first_name || last_name || email || password || password2 !== '')) return null;
    const field = Object.keys(error).filter(i => i === e.target.name )[0];
    setError({ ...error, [field]: '' });
  }

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateRegister(state);
    if(!isValid) return setError({ ...error, ...errors });
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
        onFocus={onFocus}
      />
      <Input
        name='last_name'
        value={last_name}
        label='Last Name'
        icon='fas fa-user'
        error={error.last_name}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Input
        name='email'
        value={email}
        label='Email'
        type='email'
        icon='fas fa-envelope'
        error={error.email}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Input
        name='password'
        value={password}
        label='Password'
        type='password'
        icon='fas fa-lock'
        error={error.password}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Input
        name='password2'
        value={password2}
        label='Confirm Password'
        type='password'
        icon='fas fa-lock'
        error={error.password2}
        onChange={onChange}
        onFocus={onFocus}
      />
      <CustomButton 
        text='Submit' 
        isClass='btn-outline-primary w-100 text-uppercase font-weight-bold' 
        isLoading={isLoading} 
        type='submit' 
      />
    </form>
  )
};

Form.propTypes = {
  register: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  isLoading: state_isLoading
});

export default connect(mapStateToProps, { register })(Form);
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../common/form/input/Input';

const Form = ({ history }) => {
  const [state, setState] = useState({ first_name: '', last_name: '', email: '', password: '', password2: ''});
  const [error, setError] = useState({ first_name: '', last_name: '', email: '', password: '', password2: ''});
  const { first_name, last_name, email, password, password2 } = state;

  const onChange = e => setState({ [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

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
    </form>
  )
}

Form.propTypes = {
  history: PropTypes.object.isRequired
}

export default Form;
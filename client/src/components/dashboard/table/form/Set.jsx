import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../../../common/form/input/Input';
import CustomButton from '../../../common/button/Custom_Button';

const Set = ({ show, setShow }) => {
  const [state, setState] = useState({ cal: '', prot: '', fat: '', carb: '' });
  const [error, setError] = useState({ cal: '', prot: '', fat: '', carb: '' });
  const { cal, prot, fat, carb } = state;

  const onClick = () => setShow({ ...show, btn: true, set: false });
  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onFocus = e => {}

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <form className='mt-3 mb-3' noValidate onSubmit={onSubmit}>
      <div className='d-flex justify-content-between'>
        <Input
          name='cal'
          value={cal}
          label='Calories'
          error={error.cal}
          onChange={onChange}
          onFocus={onFocus}
        />
        <Input
          name='propt'
          value={prot}
          label='Protein'
          error={error.prot}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
      <div className='d-flex justify-content-between'>
        <Input
          name='fat'
          value={fat}
          label='Fat'
          error={error.fat}
          onChange={onChange}
          onFocus={onFocus}
        />
        <Input
          name='carb'
          value={carb}
          label='Carbohydrates'
          error={error.carb}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
      <div className='d-flex justify-content-between m-auto w-50'>
        <CustomButton text='Cancel' onClick={onClick} isClass='btn-danger text-uppercase font-weight-bold' />
        <CustomButton text='Save' isClass='btn-success text-uppercase font-weight-bold' type='submit' />
      </div>
    </form>
  )
}

Set.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired
}

export default Set;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../../common/button/Custom_Button';
import Select from '../../common/form/select/Select';
import Input from '../../common/form/input/Input';

const Form = ({ isLoading = false }) => {
  const [state, setState] = useState({ name: '', qty: '', type: '', cal: '', prot : '', fat: '', carb: ''});
  const [error, setError] = useState({ name: '', qty: '', type: '', cal: '', prot : '', fat: '', carb: ''});
  const { name, qty, type, cal, fat, prot, carb } = state;

  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onFocus = e => {

  }

  const onSubmit = e => {
    e.preventDefault();

  }
  return (
    <> 
      <h2 className='text-center text-primary'>Add Product</h2>
      <form noValidate onSubmit={onSubmit}>
        <div className='col-12 col-lg-10 m-auto p-0'>
          <Input
            name='name'
            value={name}
            label='Product name'
            error={error.name}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='d-flex'>
          <div className='col-6 col-lg-4 m-auto p-0'>
            <Input
              name='qty'
              value={qty}
              label='Quantity'
              error={error.qty}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
          <div className='col-6 col-lg-4 m-auto p-0'>
            <Select
              name='type'
              value={[
                { key: 'gr.', value: 'gr' },
                { key: 'pc.', value: 'pc' },
                { key: 'ml.', value: 'ml' }
              ]}
              label='Type'
              error={error.type}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
        </div>
        <div className='d-flex'>
          <div className='col-6 col-lg-4 m-auto p-0'>
            <Input
              name='cal'
              value={cal}
              label='Calories'
              error={error.cal}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
          <div className='col-6 col-lg-4 m-auto p-0'>
            <Input
              name='prot'
              value={prot}
              label='Proteins'
              error={error.prot}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
        </div>
        <div className='d-flex'>
          <div className='col-6 col-lg-4 m-auto p-0'>
            <Input
              name='fat'
              value={fat}
              label='Fat'
              error={error.fat}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
          <div className='col-6 col-lg-4 m-auto p-0'>
            <Input
              name='carb'
              value={carb}
              label='Carbohydrates'
              error={error.carb}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
        </div>
        <CustomButton 
          text='Submit' 
          isClass='btn-outline-primary w-50 d-flex m-auto justify-content-center text-uppercase font-weight-bold' 
          isLoading={isLoading} 
          type='submit' 
        />
      </form>
    </>
  )
};

Form.propTypes = {

};

export default Form;
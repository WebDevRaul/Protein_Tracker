import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveItem, clearAdminErrors } from '../../../redux/actions/admin';
import { createStructuredSelector } from 'reselect';
import { state_errors, state_isLoading } from '../../../redux/selectors/admin';

import CustomButton from '../../common/button/Custom_Button';
import Select from '../../common/form/select/Select';
import Input from '../../common/form/input/Input';
import validateAdmin from './validation/validate';

const Form = ({ saveItem, isLoading, errors, clearAdminErrors }) => {
  const [state, setState] = useState({ _id: 'temp', name: 'Apple', qty: '1', type: 'pc.', cal: '100', prot : '10', fat: '10', carb: '25' });
  const [error, setError] = useState({ name: '', qty: '', type: '', cal: '', prot : '', fat: '', carb: ''});
  const { name, qty, cal, fat, prot, carb } = state;

  // Update error CDU
  useEffect(() => {
    setError({...error, ...errors});
    // eslint-disable-next-line
  },[errors]);

  // Clear Errors CDUM
  useEffect(() => {
    const clear = () => clearAdminErrors();
    return clear;
    // eslint-disable-next-line
  },[]);

  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onFocus = e => {
    const { name, qty, type, cal, prot, fat, carb } = error;
    if(!( name || qty || type || cal || prot || fat || carb )) return null;
    const field = Object.keys(error).filter(i => i === e.target.name )[0];
    setError({ ...error, [field]: '' });
  }

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateAdmin(state);
    if(!isValid) return setError({ ...error, ...errors });
    saveItem(state);
  }

  return (
    <> 
      <h2 className='text-center text-primary'>Add Product</h2>
      <form noValidate onSubmit={onSubmit}>
        <div className='col-12 m-auto p-0'>
          <Input
            name='name'
            value={name}
            label='Product name'
            error={error.name}
            onChange={onChange}
            onFocus={onFocus}
            capitalize={true}
          />
        </div>
        <div className='d-flex'>
          <div className='col-6 m-auto p-0'>
            <Input
              name='qty'
              value={qty}
              label='Quantity'
              error={error.qty}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
          <div className='col-6 m-auto p-0'>
            <Select
              name='type'
              value={[
                { key: 'gr.', value: 'gr.' },
                { key: 'pc.', value: 'pc.' },
                { key: 'ml.', value: 'ml.' }
              ]}
              label='Type'
              error={error.type}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
        </div>
        <div className='d-flex'>
          <div className='col-6 m-auto p-0'>
            <Input
              name='cal'
              value={cal}
              label='Calories'
              error={error.cal}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
          <div className='col-6 m-auto p-0'>
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
          <div className='col-6 m-auto p-0'>
            <Input
              name='fat'
              value={fat}
              label='Fat'
              error={error.fat}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
          <div className='col-6 m-auto p-0'>
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
  saveItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  clearAdminErrors: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isLoading: state_isLoading,
  errors: state_errors
});

export default connect( mapStateToProps, { saveItem, clearAdminErrors } )(Form);
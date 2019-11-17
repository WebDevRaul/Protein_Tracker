import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set } from '../../../../redux/actions/target';
import { createStructuredSelector } from 'reselect';
import { state_isLoading } from '../../../../redux/selectors/user';
import Input from '../../../common/form/input/Input';
import CustomButton from '../../../common/button/Custom_Button';
import validateSet from './validation/validate_set';

const Set = ({ show, setShow, set, isLoading }) => {
  const [state, setState] = useState({ cal: '', prot: '', fat: '', carb: '' });
  const [error, setError] = useState({ cal: '', prot: '', fat: '', carb: '' });
  const { cal, prot, fat, carb } = state;

  const onClick = () => {
    // Clear state
    setState({ cal: '', prot: '', fat: '', carb: '' });
    setShow({ ...show, btn: true, set: false });
  };
  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onFocus = e => {
    const { cal, prot, fat, carb } = error;
    if(!( cal || prot || fat || carb )) return null;
    const field = Object.keys(error).filter(i => i === e.target.name )[0];
    setError({ ...error, [field]: '' });
  }

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateSet({ ...state });
    if(!isValid) return setError({ ...error, ...errors });
    set(state);
  }

  return (
    <form className='mt-3 mb-3' noValidate onSubmit={onSubmit}>
      <div className='row no-gutters'>
        <div className='col-8 col-sm-6 col-md-5 col-lg-3 m-auto'>
          <Input
            name='cal'
            value={cal}
            label='Calories'
            error={error.cal}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-8 col-sm-6 col-md-5 col-lg-3 m-auto'>
          <Input
            name='prot'
            value={prot}
            label='Protein'
            error={error.prot}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-8 col-sm-6 col-md-5 col-lg-3 m-auto'>
          <Input
            name='fat'
            value={fat}
            label='Fat'
            error={error.fat}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-8 col-sm-6 col-md-5 col-lg-3 m-auto'>
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
      <div className='d-flex justify-content-between m-auto w-50'>
        <CustomButton text='Cancel' onClick={onClick} isClass='btn-danger text-uppercase font-weight-bold' />
        <CustomButton 
          text='Save' 
          isClass='btn-success text-uppercase font-weight-bold' 
          type='submit' 
          isLoading={isLoading}
        />
      </div>
    </form>
  )
}

Set.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired,
  set: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  isLoading :state_isLoading
});

export default connect(mapStateToProps, { set })(Set);
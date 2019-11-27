import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../../common/button/Custom_Button';

const Buttons = ({ show, setShow }) => {

  const onClickSet = () => setShow({ ...show, btn: false, set: true });
  const onClickCalc = () => setShow({ ...show, btn: false, calc: true });

  return (
    <div className='d-flex flex-column mt-2 mb-2'>
      <div className='d-flex justify-content-between'>
        <p className='d-flex align-items-center font-weight-bold text-muted mr-3 ml-2 mb-1'>
          Calculate your BMR
        </p>
        <CustomButton 
          text='Calculate' 
          isClass='btn-outline-primary mr-2 text-uppercase font-weight-bold'
          onClick={onClickCalc}  
        />
      </div>
      <div className='d-flex justify-content-between'>
        <p className='d-flex align-items-center font-weight-bold text-muted mr-3 ml-2 mb-1'>Set your daily target intake</p>
        <CustomButton 
          text='Set' 
          isClass='btn-outline-primary mr-2 text-uppercase font-weight-bold'
          onClick={onClickSet}  
        />
      </div>
    </div>
  )
}

Buttons.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired
}

export default Buttons;
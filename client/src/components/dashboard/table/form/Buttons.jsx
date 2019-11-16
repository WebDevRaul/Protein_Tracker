import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../../common/button/Custom_Button';

const Buttons = ({ show, setShow }) => {

  const onClickSet = () => setShow({ ...show, btn: false, set: true });
  const onClickCalc = () => setShow({ ...show, btn: false, calc: true });

  return (
    <div className='d-flex justify-content-end mt-2 mb-2'>
      <CustomButton 
        text='Set' 
        isClass='btn-outline-primary mr-4 text-uppercase font-weight-bold'
        onClick={onClickSet}  
      />
      <CustomButton 
        text='Calculate' 
        isClass='btn-outline-primary text-uppercase font-weight-bold'
        onClick={onClickCalc}  
      />
    </div>
  )
}

Buttons.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired
}

export default Buttons;
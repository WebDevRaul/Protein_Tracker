import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/button/Custom_Button';
import Select from '../../common/form/select/Select';

const Buttons = ({ onChange }) => {
  
  return (
    <div className='d-flex justify-content-between'>
      <Select
        name='select'
        value={[
          { key: 'Breakfast', value: 'breakfast' },
          { key: 'Lunch', value: 'lunch' },
          { key: 'Dinner', value: 'dinner' },
          { key: 'Snack', value: 'snack' }
        ]}
        label='Create table'
        isClass='text-uppercase font-weight-bold'
        onChange={onChange}
        error=''
      />
      <div className='d-flex align-items-center'>
        <CustomButton text='Clear all' isClass='btn-outline-danger text-uppercase font-weight-bold' />
      </div>
    </div>
  )
}

Buttons.propTypes = {

}

export default Buttons;
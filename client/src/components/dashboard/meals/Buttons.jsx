import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/button/Custom_Button';
import Select from '../../common/form/select/Select';

const Buttons = ({ state, setState }) => {

  const onChange = e => setState({ ...state, [e.target.value]: true });
  const onClear = () => setState({ breakfast: false, lunch: false, diner: false, snak: false });
  
  return (
    <div className='row no-gutters'>
      <div className='col-4'>
        <Select
          name='select'
          value={[
            { key: 'breakfast', value: 'Breakfast' },
            { key: 'lunch', value: 'Lunch' },
            { key: 'diner', value: 'Diner' },
            { key: 'snack', value: 'Snack' }
          ]}
          label='Create table'
          isClass='text-uppercase font-weight-bold'
          onChange={onChange}
          error=''
        />
      </div>
      <div className='col d-flex m-auto justify-content-end'>
        <CustomButton text='Clear all' isClass='btn-outline-danger text-uppercase font-weight-bold' onClick={onClear} />
      </div>
    </div>
  )
}

Buttons.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired
}

export default Buttons;
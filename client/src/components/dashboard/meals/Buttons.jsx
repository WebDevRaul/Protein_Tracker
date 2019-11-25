import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/button/Custom_Button';
import Select from '../../common/form/select/Select';

const Buttons = ({ state, setState, onClear }) => {

  const onChange = e => setState({ ...state, [e.target.value]: true });
  const toClear = () => {
    onClear();
    setState({ one: false, two: false, tree: false, four: false });
  }
  
  return (
    <div className='row no-gutters'>
      <div className='col-4'>
        <Select
          name='select'
          value={[
            { key: 'Breakfast', value: 'Breakfast' },
            { key: 'Lunch', value: 'Lunch' },
            { key: 'Diner', value: 'Diner' },
            { key: 'Snack', value: 'Snack' }
          ]}
          label='Create table'
          isClass='text-uppercase font-weight-bold'
          onChange={onChange}
          error=''
        />
      </div>
      <div className='col d-flex m-auto justify-content-end'>
        <CustomButton text='Clear all' isClass='btn-outline-danger text-uppercase font-weight-bold' onClick={toClear} />
      </div>
    </div>
  )
}

Buttons.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
}

export default Buttons;
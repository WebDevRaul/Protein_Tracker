import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../common/form/select/Select';

const SelectCard = ({ state, setState }) => {

  const onChange = e => setState({ ...state, [e.target.value]: true });
  
  return (
    <div className='row no-gutters'>
      <div className='col-4'>
        <Select
          name='select'
          value={[
            { key: 'Breakfast', value: 'Breakfast' },
            { key: 'Lunch', value: 'Lunch' },
            { key: 'Dinner', value: 'Dinner' },
            { key: 'Snack', value: 'Snack' }
          ]}
          label='Create table'
          isClass='text-uppercase'
          onChange={onChange}
          error=''
        />
      </div>
    </div>
  )
}

SelectCard.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired
}

export default SelectCard;
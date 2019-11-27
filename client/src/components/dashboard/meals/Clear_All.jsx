import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/button/Custom_Button';

const ClearAll = ({ state, setState, onClear }) => {
  const { Breakfast, Lunch, Diner, Snack } = state;

  const toClear = () => {
    onClear();
    setState({...state, Breakfast: false, Lunch: false, Diner: false, Snack: false });
  }
  
  return (
    <div className='row no-gutters'>
      <div className='col d-flex m-auto justify-content-end'>
        {
          (Breakfast || Lunch || Diner || Snack) &&
          <CustomButton text='Clear all' isClass='btn-outline-danger text-uppercase font-weight-bold' onClick={toClear} />
        }
      </div>
    </div>
  )
}

ClearAll.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
}

export default ClearAll;
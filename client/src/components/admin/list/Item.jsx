import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../common/spinner/Spinner';


const Item = ({ data: { _id, name, qty, type, cal, prot, fat, carb, icon }, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(!loading)
    onDelete(_id);
  }

  return (
    <div className='bg-primary mt-3 rounded shadow-lg text-white'>
      <div className='row no-gutters'>
        <div className='col-11 p-3 d-flex'>
          <div className='col p-0'>
            <h5 className='mb-0'>{name}</h5>
          </div>
          <div className='col p-0'>
          <h5 className='mb-0'>{qty}{type}</h5>
          </div>
          <div className='col p-0'>
            <h5 className='mb-0'>{cal}</h5>
          </div>
          <div className='col p-0'>
            <h5 className='mb-0'>{prot}</h5>
          </div>
          <div className='col p-0'>
            <h5 className='mb-0'>{fat}</h5>
          </div>
          <div className='col p-0'>
            <h5 className='mb-0'>{carb}</h5>
          </div>
        </div>
        <div className='col-1 d-flex m-auto'>
          {
            !icon &&
            <>
              {
                loading
                ? <span className='d-flex m-auto'><Spinner height='40px' /></span>
                : <i 
                    className='far fa-times-circle m-auto text-danger hover'
                    style={{ fontSize: '1.4em' }}
                    onClick={onClick}
                  ></i>
              }
            </>
          }
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func
}

export default Item;
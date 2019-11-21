import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Spinner from '../../common/spinner/Spinner';

import './item.css'

const Item = ({ data: { _id, name, qty, type, cal, prot, fat, carb, icon }, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const temp = _id === 'temp' ? true : false;

  const onClick = () => {
    if(temp) return;
    setLoading(!loading)
    onDelete(_id);
  }

  return (
    <div className='border border-secondary mt-3 rounded shadow text-muted'>
      <div className={classnames('row no-gutters pl-2 pr-2', { 'blinking': temp })}>
        <div className='col-11 d-flex'>
          <div className='col p-0 text-truncate'>
            <h5 className='mb-0 pt-3 pb-3 pr-2 item-responsive text-truncate'>{name}</h5>
          </div>
          <div className='col p-0'>
          <p className='mb-0 pt-3 pb-3 item-responsive font-weight-bold'>{qty}{type}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3 item-responsive font-weight-bold'>{cal}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3 item-responsive font-weight-bold'>{prot}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3 item-responsive font-weight-bold'>{fat}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3 item-responsive font-weight-bold'>{carb}</p>
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
                    className='far fa-times-circle icon-responsive m-auto text-danger hover'
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
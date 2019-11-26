import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Spinner from '../../common/spinner/Spinner';
import Modal from './Modal';

const Item = ({ data, onDelete }) => {
  const [state, setState] = useState({ loading: false, modal: false });
  const { loading, modal } = state;
  const { _id, name, qty, type, cal, prot, fat, carb, icon } = data;
  const temp = _id === 'temp' ? true : false;

  const onClick = () => {
    if(temp) return;
    setState({ loading: true, modal: true });
  }

  const toDelete = () => {
    setState({ ...state, modal: false });
    onDelete(_id);
  };

  return (
    <div className={classnames('border border-secondary mt-3 rounded shadow text-muted', {'border-success': temp})}>
      <div className={classnames('row no-gutters pl-2 pr-2', { 'blinking': temp })}>
        <div className='col-11 d-flex'>
          <div className='col p-0 text-truncate'>
            <h5 className='mb-0 pt-3 pb-3 pr-2 text-truncate'>{name}</h5>
          </div>
          <div className='col p-0'>
          <p className='mb-0 pt-3 pb-3 font-weight-bold'>{qty}{type}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3 font-weight-bold'>{cal}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3 font-weight-bold'>{prot}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3 font-weight-bold'>{fat}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3 font-weight-bold'>{carb}</p>
          </div>
        </div>
        <div className='col-1 d-flex m-auto'>
          {
            modal && 
            <Modal
              state={state}
              setState={setState} 
              item={data}
              toDelete={toDelete}
            />
          }
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
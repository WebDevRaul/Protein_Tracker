import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../common/spinner/Spinner';
import Modal from './Modal';

const Item = ({ item }) => {
  const [state, setState] = useState({ qty: '', cal: '', prot: '', fat: '', carb});
  const [loading, setLoading] = useState(false);
  const [show, setModal] = useState(false);
  const { qty, cal, prot, fat, carb, } = state;
  const { _id, name, type, icon } = item;

  // Update state CDM
  useEffect(() => {
    const { qty, cal, prot, fat, carb, } = item;
    setState({ ...state, qty, cal, prot, fat, carb })
  },[])

  const onClick = () => setLoading(!loading);
  const onModal = () => setModal(!show);

  return (
    <li className="list-group-item d-flex p-0">
       <div className='row no-gutters pl-2 pr-2 w-100'>
        <div className='col-11 d-flex text-muted'>
          <div className='col p-0 text-truncate'>
            <h5 className='mb-0 pr-2 pt-2 pb-2 text-truncate'>{name}</h5>
          </div>
          <div className='col p-0'>
            <Modal show={show} setModal={setModal} item={item}/>
            <p onClick={onModal}
              className='mb-0 pt-2 pb-2 font-weight-bold'
            >{qty}{type}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2 font-weight-bold'>{cal}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2 font-weight-bold'>{prot}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2 font-weight-bold'>{fat}</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2 font-weight-bold'>{carb}</p>
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
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item;
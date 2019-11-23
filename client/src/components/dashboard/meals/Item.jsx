import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Modal from './Modal';

const Item = ({ item, card, setCard, title, dummy, icon }) => {
  const [state, setState] = useState({ _id: '', name: '', qty: '', type: '', cal: '', prot: '', fat: '', carb: '' });
  const [show, setShow] = useState(false);
  const {_id, name, qty, type, cal, prot, fat, carb } = state;
  const temp = _id === 'temp' ? true : false;

  // Update state CDU
  useEffect(() => {
    setState({ ...item });
    // eslint-disable-next-line
  },[item])

  const onRemove = () => {
    const items = card.filter(i => i._id !== _id);
    setCard(items)
  }
  const onModal = () => {
    if(temp || dummy) return;
    setShow(!show)
  };

  return (
    <li className="list-group-item d-flex p-0">
       <div className={classnames('row no-gutters pl-2 pr-2 w-100', {'blinking': temp})}>
        <div className='col-11 d-flex text-muted'>
          <div className='col p-0 text-truncate'>
            <h5 className='mb-0 pr-2 pt-2 pb-2 text-truncate'>{name}</h5>
          </div>
          <div className='col p-0'>
            {
              show && 
              <Modal 
                show={show} 
                setShow={setShow} 
                state={state}
                setState={setState}
                item={item}
                title={title}
              />
            }
            <p 
              onClick={onModal}
              className={classnames('mb-0 pt-2 pb-2 font-weight-bold', {'hover' : !dummy})}
            >
              {qty}{type}
            </p>
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
            <i 
              className='far fa-times-circle icon-responsive m-auto text-danger hover'
              style={{ fontSize: '1.4em' }}
              onClick={onRemove}
            ></i>
          }
        </div>
      </div>
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  title: PropTypes.string,
  dummy: PropTypes.bool,
  icon: PropTypes.string,
}

export default Item;
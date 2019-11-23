import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateItemsToTable } from '../../../redux/actions/meal';
import { createStructuredSelector } from 'reselect';
import {  } from '../../../redux/selectors/meal'
import classnames from 'classnames';
import CustomButton from '../../common/button/Custom_Button';
import doTheCalc from './utils/doTheCalc';

const Modal = ({ show, setShow, state, setState, item, title, updateItemsToTable }) => {
  const [modal, setModal] = useState({ _id: '', name: '', qty: '', type: '', cal: '', prot: '', fat: '', carb: '' });
  const [input, setInput] = useState('');
  const { _id, name, qty, type, cal, prot, fat, carb } = modal;

  // Update state CDU
  useEffect(() => {
    const { _cal, _prot, _fat, _carb } = doTheCalc({...item, input, state_qty: state.qty});
    setModal({ ...state, cal: _cal, prot: _prot, fat: _fat, carb: _carb });
    // eslint-disable-next-line
  },[input]);

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  const onClickOutside = e => {
    if(e.target.className !== 'modal fade d-block') return;
    setShow(!show);
  }

  const onClick = () => setShow(!show);
  const onChange = val => {
    // validation here
    setInput(val);
  };
  
  const onSave = () => {
    setState({ ...state, cal, prot, fat, carb, qty:input });
    setShow(!show);
    const temp = { _id: 'temp', name, qty, type, cal, prot, fat, carb };
    const data = { ...modal };
    updateItemsToTable({ data, title, temp, _id });
  }

  return (
    <div className={classnames('modal fade', { 'd-block': show })}
      style={{opacity: 1, background:'rgba(34, 36, 38, 0.2)'}}
     tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-2">
          <div className="modal-header">
            <h5 className="modal-title text-primary">{name}</h5>
            <button type="button" className="close" onClick={onClick} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className='d-flex justify-content-around border-bottom pb-3'>
              <div>Cal. {cal}</div>
              <div>Prot. {prot}</div>
              <div>Fat {fat}</div>
              <div>Carb. {carb}</div>
            </div>
            <div className='d-flex justify-content-around pt-3 align-items-center'>
              <div>Qty. {qty} {type}</div>
              <div className='d-flex align-items-center'>
                <i className='text-success mr-2'>NEW</i> Qty. 
                <div className="input-group input-group-sm ml-2">
                  <input 
                    name='input'
                    value={input}
                    onChange={e=>onChange(e.target.value)}
                    error=''
                    className="form-control"
                    type="text"   
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <CustomButton text='Cancel' isClass='btn-outline-danger' onClick={onClick} />
            <CustomButton text='Save' isClass='btn-outline-success' onClick={onSave} />
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  updateItemsToTable: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({

});

export default connect( mapStateToProps, { updateItemsToTable } )(Modal);
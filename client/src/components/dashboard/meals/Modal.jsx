import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateItemsToTable } from '../../../redux/actions/meal';
import { createStructuredSelector } from 'reselect';
import {  } from '../../../redux/selectors/meal'
import classnames from 'classnames';
import CustomButton from '../../common/button/Custom_Button';
import doTheCalc from './utils/doTheCalc';
import validateModal from './utils/validate_modal';
import Input from '../../common/form/input/Input';

const Modal = ({ show, setShow, state, setState, item, title, updateItemsToTable }) => {
  const [modal, setModal] = useState({ _id: '', name: '', qty: '', type: '', cal: '', prot: '', fat: '', carb: '' });
  const [error, setError] = useState({ qty: '' });
  const [input, setInput] = useState('');
  const { _id, name, qty, type, cal, prot, fat, carb, p } = modal;

  // Update state CDU
  useEffect(() => {
    const { cal, prot, fat, carb } = doTheCalc({...item, input, state_qty: state.qty});
    setModal({ ...state, cal, prot, fat, carb });
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
  const onChange = val => setInput(val);
  const onFocus = () => {
    const { qty } = error;
    if(!qty) return null;
    setError({ ...error, qty: '' });
  };
  
  const onSave = () => {
    const temp = { _id: `temp${_id}`, name, qty:input, type, cal, prot, fat, carb, p };
    const data = { _id, name, qty:input, type, cal, prot, fat, carb, p };
    const { errors, isValid } = validateModal({ qty:input, cal, prot, fat, carb });
    if(!isValid) return setError({ ...error, ...errors });
    updateItemsToTable({ data, title, temp, _id });
    setState({ ...state, cal, prot, fat, carb, qty:input });
    setShow(!show);
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
            <div className='row no-gutters'>
              <div className='col-4'>
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div>Qty. {qty} {type}</div>
                </div>
              </div>
              <div className='col-8 d-flex no-gutters'>
                <div className='col-4 d-flex justify-content-center align-items-center h-100'>
                  <span><i className='text-success mr-2'>NEW</i> Qty. </span>
                </div>
                <div className='col-8'>
                  <Input 
                    name='input'
                    value={input}
                    label=''
                    onChange={e=>onChange(e.target.value)}
                    onFocus={onFocus}
                    error={error.qty}
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
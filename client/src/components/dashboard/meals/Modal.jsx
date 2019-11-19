import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CustomButton from '../../common/button/Custom_Button';
import Input from '../../common/form/input/Input';

const Modal = ({ show, setModal, item: { _id, name, qty, type, cal, prot, fat, carb } }) => {
  const [input, setInput] = useState('');

  const onClick = () => setModal(!show);
  const onChange = e => setInput(e.target.value);
  const onFocus = () => {};

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
            <div className='d-flex justify-content-around pt-3'>
              <div>Qty. {qty} {type}</div>
              <div className='d-flex'>
                <i className='text-success mr-2'>NEW</i> Qty. 
                <div class="input-group input-group-sm ml-2">
                  <input 
                    name='input'
                    value={input}
                    onChange={onChange}
                    error=''
                    class="form-control"
                    type="text"   
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <CustomButton text='Cancel' isClass='btn-outline-danger' onClick={onClick} />
            <CustomButton text='Save' isClass='btn-outline-success' />
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {

}

export default Modal;
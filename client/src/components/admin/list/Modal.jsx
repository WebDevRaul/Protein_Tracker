import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CustomButton from '../../common/button/Custom_Button';

const Modal = ({ state, setState, item, toDelete }) => {
  const { name, qty, type, cal, prot, fat, carb } = item;

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  const onClickOutside = e => {
    if(e.target.className !== 'modal fade d-block') return;
    setState({ loading: false, modal: false });
  }

  const onClick = () => setState({ loading: false, modal: false });

  const onSave = () => toDelete();

  return (
    <div className={classnames('modal fade', { 'd-block': true })}
      style={{opacity: 1, background:'rgba(34, 36, 38, 0.2)'}}
     tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-2">
          <div className="modal-header">
            <h5 className="modal-title text-danger">Delete {name}.</h5>
            <button type="button" className="close" onClick={onClick} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className='d-flex justify-content-around border-bottom pb-3'>
              <div>Qty. {qty} {type}</div>
              <div>Cal. {cal}</div>
              <div>Prot. {prot}</div>
              <div>Fat {fat}</div>
              <div>Carb. {carb}</div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <CustomButton text='Cancel' isClass='btn-outline-danger' onClick={onClick} />
            <CustomButton text='Confirm' isClass='btn-outline-success' onClick={onSave} />
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  toDelete: PropTypes.func.isRequired
}

export default Modal;
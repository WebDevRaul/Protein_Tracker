import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const Modal = ({
  product_name,
  calories,
  protein,
  fat,
  carbohydrates,
  modal,
  onModalCancel,
  onModalDelete
}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className={classnames('modal', { 'show' : modal })}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delete {product_name}?</h5>
                </div>
                <div className="modal-body">
                  <p className='ml-4'>{product_name}</p>
                  <div className='row paper no-gutters text-center'>
                    <div className='col m-auto'><p>Cal. {calories}</p></div>
                    <div className='col m-auto'><p>Prot. {protein}</p></div>
                    <div className='col m-auto'><p>Fat {fat}</p></div>
                    <div className='col m-auto'><p>Carb. {carbohydrates}</p></div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={onModalDelete}
                  >Delete</button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={onModalCancel}
                  >Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  product_name: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  onModalCancel: PropTypes.func.isRequired,
  onModalDelete: PropTypes.func.isRequired
};

export default Modal;
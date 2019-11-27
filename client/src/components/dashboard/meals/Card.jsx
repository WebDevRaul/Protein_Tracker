import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToTable, deleteItemFromTable, deleteItemFromREDUX } from '../../../redux/actions/meal';
import { createStructuredSelector } from 'reselect';
import { state_select_keys, state_admin } from '../../../redux/selectors/admin'

import Item from './Item';
import Select from '../../common/form/select/Select';
import Header from './Header';
import setPosition from './utils/setPosition';

const Card = ({ 
  items, title, options, list, state, setState, addItemToTable, deleteItemFromTable, deleteItemFromREDUX }) => {
  const [card, setCard] = useState([]);
  const [p, setP] = useState(0);

  useEffect(() => {
    const { num } = setPosition(items);
    setP(num);
  },[items])
  
  // Update State CDU
  useEffect(() => {
    setCard([...items]);
    // eslint-disable-next-line
  },[items])
  
  
  const onChange = e => {
    const { _id, name, qty, type, cal, prot, fat, carb } = list.filter(i => i._id === e.target.value)[0];
    const temp = { _id: `temp${_id}`, name, qty, type, cal, prot, fat, carb, p: p+1 };
    const data = { _id, name, qty, type, cal, prot, fat, carb, p: p+1 };
    addItemToTable({ temp, data, title });
    setP(p+1);
  };

  const onDelete = ({ _id, title }) => {
    if(_id.startsWith('temp')) return deleteItemFromREDUX({ _id, title });
    deleteItemFromTable({ _id, title })
  }
  const onClose = () => setState({ ...state, [title]: false });

  return (
    <section>
      <div className="card mb-3">
        <div className="card-header bg-white border border-primary text-center">
          <div className='d-flex justify-content-end'>
            <button type="button" className="close justify-content-end d-flex" onClick={onClose} aria-label="Close">
              <span className='text-danger' aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className='row no-gutters'>
            <div className='col-4 d-flex justify-content-center align-items-center m-auto'>
              <h4 className='card-title text-capitalize text-primary mb-0'>{title}</h4>
            </div>
            <div className='col-6 col-md-4 col-lg-3 m-auto'>
              <Select
                name='select'
                value={options}
                label='Select product'
                isClass='text-uppercase font-weight-bold'
                onChange={onChange}
                error=''
              />
            </div>
          </div>
        </div>
        <div className='border border-top-0 border-success'>
          <ul className="list-group list-group-flush">
            <Header />
            {
              card.map(i => <Item key={i._id} item={i} title={title} onDelete={onDelete} />)
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  addItemToTable: PropTypes.func.isRequired,
  deleteItemFromTable: PropTypes.func.isRequired,
  deleteItemFromREDUX: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  options: state_select_keys,
  list: state_admin
});

export default connect( mapStateToProps, { addItemToTable, deleteItemFromTable, deleteItemFromREDUX } )(Card);
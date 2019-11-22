import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToTable } from '../../../redux/actions/meal';
import { createStructuredSelector } from 'reselect';
import { state_select_keys, state_admin } from '../../../redux/selectors/admin'

import Item from './Item';
import Select from '../../common/form/select/Select';

const Card = ({ items, title, options, list, state, setState, addItemToTable }) => {
  const [card, setCard] = useState([]);

  // Update State CDM
  useEffect(() => {
    setCard([...items]);
    // eslint-disable-next-line
  },[]);
  
  const onChange = e => {
    const item = list.filter(i => i._id === e.target.value)[0];
    setCard([...card, item]);
    const { name, qty, type, cal, prot, fat, carb } = item;
    const data = { _id: 'temp', name, qty, type, cal, prot, fat, carb }
    addItemToTable({ data, title });
  };

  const onClose = () => setState({ ...state, [title]: false });

  return (
    <section>
      <div className="card mb-3">
        <div className="card-header border border-primary text-center">
          <div className='d-flex justify-content-end'>
            <button type="button" className="close justify-content-end d-flex" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className='row no-gutters'>
            <div className='col-8 col-sm-6 m-auto'>
              <h5 className='mb-0 text- text-capitalize'>{title}</h5>
            </div>
            <div className='col-8 col-sm-6 m-auto'>
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
            <Item 
              item={{ name: 'Name', qty:'Qty', type:'.', cal:'Cal', prot:'Prot', fat:'Fat', carb: 'Carb', icon:'no' }}
              dummy={true}
            />
            {
              card.map((i,index)=> <Item key={index} item={i} card={card} setCard={setCard} title={title} />)
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
  addItemToTable: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  options: state_select_keys,
  list: state_admin
});

export default connect( mapStateToProps, { addItemToTable } )(Card);
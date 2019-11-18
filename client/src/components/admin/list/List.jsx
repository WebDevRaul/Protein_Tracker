import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../../redux/actions/admin';
import { createStructuredSelector } from 'reselect';

import Item from './Item';

const List = ({ deleteItem }) => {

  const onDelete = id => deleteItem({ id });
  
  const arr = [
    { _id: '1', name: 'Apple', qty: '1999.9', type: 'pc.', cal: '1011.9', prot: '1011.9', fat: '1010.0', carb: '1501.0' },
    { _id: '2', name: 'Avocado', qty: '1', type: 'pc.', cal: '2', prot: '20', fat: '20', carb: '200' },
    { _id: '3', name: 'Beef', qty: '100', type: 'gr.', cal: '300', prot: '3', fat: '233', carb: '5' }
  ]
  return (
    <section>
      {
        arr &&
        <>
          <Item data={ {name:'Name:', qty:'Qty', type:'.', cal:'Cal.', prot:'Prot.', fat:'Fat.', carb:'Carb.', icon:'no'} } />
          {arr.map((i, index) => <Item key={index} data={i} onDelete={onDelete} />)}
        </>
      }
    </section>
  )
}

List.propTypes = {
  deleteItem: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, { deleteItem })(List);
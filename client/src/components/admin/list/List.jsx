import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../../redux/actions/admin';
import { createStructuredSelector } from 'reselect';
import { state_admin } from '../../../redux/selectors/admin';

import Item from './Item';

const List = ({ items, deleteItem }) => {

  const onDelete = _id => deleteItem({ _id });

  return (
    <section>
      <Item data={ {name:'Name:', qty:'Qty', type:'.', cal:'Cal.', prot:'Prot.', fat:'Fat.', carb:'Carb.', icon:'no'} } />
      {
        items && items.map((i, index) => <Item key={index} data={i} onDelete={onDelete} />)
      }
    </section>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  items: state_admin
});

export default connect(mapStateToProps, { deleteItem })(List);
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTarget } from '../../redux/actions/target';
import { updateAdmin } from '../../redux/actions/admin';

import Form from '../../components/admin/fom/Form';
import List from '../../components/admin/list/List';

const Admin = ({ updateAdmin, updateTarget }) => {
  // Update target CDM
  useEffect(() => {
    updateTarget();
    updateAdmin();
    // eslint-disable-next-line
  },[])
  return (
    <section className='admin mt-5 mb-3'>
      <div className='row no-gutters'>
        <div className='col-10 col-sm-8 col-md-6 col-lg-4 m-auto'>
          <Form />
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='col-11 col-md-10 col-lg-8 m-auto'>
          <List />
        </div>
      </div>
    </section>
  )
}

Admin.propTypes = {
  updateTarget: PropTypes.func.isRequired,
  updateAdmin: PropTypes.func.isRequired
}

export default connect(null, { updateTarget, updateAdmin })(Admin);
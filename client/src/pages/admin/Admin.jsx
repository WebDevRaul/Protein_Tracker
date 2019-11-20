import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTarget } from '../../redux/actions/target';
import { updateAdmin } from '../../redux/actions/admin';
import { createStructuredSelector } from 'reselect';
import { state_admin_isDefault } from '../../redux/selectors/admin';
import { state_target_isDefault } from '../../redux/selectors/target';

import Form from '../../components/admin/fom/Form';
import List from '../../components/admin/list/List';

const Admin = ({ updateAdmin, updateTarget, admin, target }) => {
  // Update target CDM
  useEffect(() => {
    if(admin) updateAdmin();
    if(target) updateTarget();
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
};

Admin.propTypes = {
  updateTarget: PropTypes.func.isRequired,
  updateAdmin: PropTypes.func.isRequired,
  admin: PropTypes.bool.isRequired,
  target: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  admin: state_admin_isDefault,
  target: state_target_isDefault
});

export default connect(mapStateToProps, { updateTarget, updateAdmin })(Admin);
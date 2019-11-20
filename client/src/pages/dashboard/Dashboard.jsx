import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTarget } from '../../redux/actions/target';
import { updateAdmin } from '../../redux/actions/admin';
import { createStructuredSelector } from 'reselect';
import { state_admin_isDefault } from '../../redux/selectors/admin';
import { state_target_isDefault } from '../../redux/selectors/target';
import Table from '../../components/dashboard/table/Table';
import Meals from '../../components/dashboard/meals/Meals';

const Dashboard = ({ updateTarget, updateAdmin, target, admin }) => {
  // Update target CDM
  useEffect(() => {
    if(target) updateTarget();
    if(admin) updateAdmin();
    // eslint-disable-next-line
  },[])
  return (
    <section className='dashboard'>
      <Table />
      <Meals />
    </section>
  )
};

Dashboard.propTypes = {
  updateTarget: PropTypes.func.isRequired,
  updateAdmin: PropTypes.func.isRequired,
  target: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  target: state_target_isDefault,
  admin: state_admin_isDefault
});

export default connect(mapStateToProps, { updateTarget, updateAdmin })(Dashboard);
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTarget } from '../../redux/actions/target';
import { updateAdmin } from '../../redux/actions/admin';
import Table from '../../components/dashboard/table/Table';
import Meals from '../../components/dashboard/meals/Meals';

const Dashboard = ({ updateTarget, updateAdmin }) => {
  // Update target CDM
  useEffect(() => {
    updateTarget();
    updateAdmin();
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
  updateAdmin: PropTypes.func.isRequired
}

export default connect(null, { updateTarget, updateAdmin })(Dashboard);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { update } from '../../redux/actions/target';
import Table from '../../components/dashboard/table/Table';
import Meals from '../../components/dashboard/meals/Meals';

const Dashboard = ({ update }) => {
  // Update target CDM
  useEffect(() => {
    update();
    // eslint-disable-next-line
  },[])
  return (
    <section className='dashboard'>
      <Table />
      <Meals />
    </section>
  )
}

export default connect(null, { update })(Dashboard);
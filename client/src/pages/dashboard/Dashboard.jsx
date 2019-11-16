import React from 'react';
import Table from '../../components/dashboard/table/Table';
import Meals from '../../components/dashboard/meals/Meals';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <Table />
      <Meals />
    </section>
  )
}

export default Dashboard;
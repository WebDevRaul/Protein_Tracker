import React from 'react';

// Components
import Calculator from './Calculator';
import Dashboard from './Dashboard';


export default function DashboardParent() {
  return (
    <div className='container'>
      <Calculator />
      <Dashboard />
    </div>
  )
};
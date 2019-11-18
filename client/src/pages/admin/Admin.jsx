import React from 'react';

import Form from '../../components/admin/fom/Form';
import List from '../../components/admin/list/List';

const Admin = () => {
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

export default Admin;
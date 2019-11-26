import React from 'react';

const Header = () => {
  return (
    <li className="list-group-item d-flex p-0 border-success">
      <div className='row no-gutters pl-2 w-100'>
        <div className='col-11 d-flex text-muted font-weight-bold'>
          <div className='col p-0'>
            <p className='mb-0 pr-2 pt-2 pb-2'>Name</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2'>Qty.</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2'>Cal.</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2'>Prot.</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2'>Fat</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-2 pb-2'>Carb.</p>
          </div>
        </div>
        <div className='col-1'>
        </div>
      </div>
    </li>
  )
}

export default Header;
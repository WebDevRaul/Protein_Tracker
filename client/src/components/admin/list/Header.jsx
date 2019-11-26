import React from 'react';

const Header = () => {
  return (
    <div className='border border-secondary mt-3 rounded shadow text-muted'>
      <div className='row no-gutters pl-2 pr-2'>
        <div className='col-11 d-flex'>
          <div className='col p-0 text-truncate'>
            <p className='mb-0 pt-3 pb-3 pr-2 text-truncate'>Name</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3'>Qty.</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3'>Cal</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3'>Prot.</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3'>Fat</p>
          </div>
          <div className='col p-0'>
            <p className='mb-0 pt-3 pb-3'>Carb.</p>
          </div>
        </div>
        <div className='col-1'>
        </div>
      </div>
    </div>
  )
}

export default Header;
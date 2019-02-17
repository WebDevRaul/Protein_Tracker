import React from 'react';

// Components
import Target from './Target';
import Actual from './Actual';
import Diffrence from './Diffrence';

export default function Total_Tables() {
  return (
    <div className='calculator'>
      <div className="card border-0 mb-3">
        <div className="card-header border-0 bg-transparent">
          <Target />
        </div>
        <div className="card-body border-0 text-success">
          <Actual />
        </div>
        <div className="card-footer border-0 bg-transparent">
          <Diffrence />
        </div>
      </div>
    </div>
  )
};
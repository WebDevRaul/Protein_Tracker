import React from 'react';

// Components
import Target from './Target';
import Actual from './Actual';
import Diffrence from './Diffrence';

export default function Total_Tables() {
  return (
    <div className='calculator mt-4'>
      <div className="card border-0 mb-3">
        <div className="card-header border-0 bg-transparent target">
          <Target />
        </div>
        <div className="card-body border-0 text-success actual">
          <Actual />
        </div>
        <div className="card-footer border-0 bg-transparent diffrence">
          <Diffrence />
        </div>
      </div>
    </div>
  )
};
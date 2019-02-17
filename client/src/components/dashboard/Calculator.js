import React from 'react';

// Components
import Target from './Target';
import Actual from './Actual';
import Diffrence from './Diffrence';

export default function Total_Tables() {
  return (
    <div>
      <div className="card border-0 mb-3">
        <div className="card-header bg-transparent">
          <Target />
        </div>
        <div className="card-body text-success">
          <Actual />
        </div>
        <div className="card-footer bg-transparent">
          <Diffrence />
        </div>
      </div>
    </div>
  )
};
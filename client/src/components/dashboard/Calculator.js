import React from 'react';

// Components
import Target from './Target';
import Actual from './Actual';
import Diffrence from './Diffrence';

export default function Total_Tables() {
  return (
    <div>
      <div className="card border-success mb-3">
        <div className="card-header bg-transparent border-success">
          <Target />
        </div>
        <div className="card-body text-success">
          <Actual />
        </div>
        <div className="card-footer bg-transparent border-success">
          <Diffrence />
        </div>
      </div>
    </div>
  )
};
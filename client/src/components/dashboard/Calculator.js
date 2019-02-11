import React from 'react';
import Target from './Target';
import Actual from './Actual';

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
        <div className="card-footer bg-transparent border-success">dif</div>
      </div>
    </div>
  )
};
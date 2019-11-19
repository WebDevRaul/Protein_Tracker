import React from 'react';
import spinner from '../../../assets/spinner/spinner.gif';

export default ({ height }) => {
  return (
    <img src={spinner} style={{height: height}} alt='Loading...'/>
  );
};
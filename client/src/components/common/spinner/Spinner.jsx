import React from 'react';
import spinner from '../../../assets/spinner/spinner.gif';

export default () => {
  return (
    <img src={spinner} style={{width: '48px'}} alt='Loading...'/>
  );
};
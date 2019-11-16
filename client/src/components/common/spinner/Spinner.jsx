import React from 'react';
import spinner from '../../../assets/spinner/spinner.gif';

export default () => {
  return (
    <img src={spinner} style={{width: '40px'}} alt='Loading...'/>
  );
};
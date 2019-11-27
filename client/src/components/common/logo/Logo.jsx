import React from 'react';
import { Link } from 'react-router-dom';
import { color } from './utils/color';

import './logo.css';

const Logo = () => {

  const { rgb } = color();

  const squer = rgb.map((el, index) => <span key={index} style={{ 
    backgroundColor: `rgb(${el})`, 
    display: 'inline-flex',
    width: '4px', 
    height: '4px',
    margin: '2px'
   }}></span>)

  return (
    <div className='logo text-center ml-3'>
      <div className='logo-div text-uppercase'>
        <Link to='/home'>
          <p>{squer}</p>
          <p className='text-white'>Macro</p>
          <p>{squer}</p>
        </Link>
      </div>
    </div>
  )
}

export default Logo;
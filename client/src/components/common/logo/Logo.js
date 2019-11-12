import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    let squers = [];
    
    for (let i = 0; i < 8; i++) {
      let color = [];
      for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256 ))
      }
      squers.push({i, color})
    }

    const squer = squers.map(i => 
      <span key={i.i} style =
        {{
          display: 'inline-flex',
          margin: '1px',
          width: '4.5px',
          height: '4.5px',
          backgroundColor: `rgb(${i.color})`
        }}>
      </span>);

    return (
      <div className='logo text-center ml-3'>
        <div className='logo-div text-uppercase'>
          <Link to='/'>
            <p>{squer}</p>
            <p>Macro</p>
            <p>{squer}</p>
          </Link>
        </div>
      </div>
    )
  }
}
export default Logo;
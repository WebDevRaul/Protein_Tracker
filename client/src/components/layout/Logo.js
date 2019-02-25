import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    let squers = [];
    
    for (let i = 0; i < 7; i++) {
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
          margin: '2px',
          width: '8px',
          height: '8px',
          backgroundColor: `rgb(${i.color})`
        }}>
      </span>);

    return (
      <div className='logo text-center'>
        <div className='logo-div text-uppercase'>
          <Link to='/home'>
            <p>Protien</p>
            <p>{squer}</p>
            <p>{squer}</p>
            <p>Tracker</p>
          </Link>
        </div>
      </div>
    )
  }
}
export default Logo;
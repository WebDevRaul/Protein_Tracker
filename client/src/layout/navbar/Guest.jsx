import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Guest = () => {
  return (
    <ul className="navbar-nav ml-auto mr-5">
      <li className="nav-item mr-3 mt-3">
        <NavLink 
          to='/' 
          className='nav-link'
          ><span>Home</span></NavLink>
        </li>
      <li className="nav-item mr-3 mt-3">
        <NavLink 
          to='/register' 
          className='nav-link'
          activeClassName="active"
        ><span>Register</span></NavLink>
      </li>
      <li className="nav-item mr-3 mt-3">
        <NavLink 
          to='/login' 
          className='nav-link'
          activeClassName="active"
        ><span>Sign in</span></NavLink>
      </li>
    </ul>
  )
}

Guest.propTypes = {
  
}

export default Guest
import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const User = () => {
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
          to='/dashboard'
          className='nav-link'
          activeClassName="active"
          ><span>Dashboard</span></NavLink>
      </li>
      <li className="nav-item mr-3 mt-3">
        <NavLink 
          to='/admin'
          className='nav-link'
          activeClassName="active"
          ><span>Admin</span></NavLink>
      </li>
      
      <li className="nav-item mr-3 mt-3">
        <button
          className='nav-link btn'
          onClick={() =>{}}
          ><span>Sign Out</span></button>
      </li>
    </ul>
  )
}

User.propTypes = {

}

export default User;
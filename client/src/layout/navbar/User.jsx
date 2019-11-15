import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const User = ({ show, setShow }) => {

  const onClick = () => { show && setShow(!show) }
  const onSignOut = () => {}

  return (
    <ul className="navbar-nav ml-auto mr-5">
      <li className="nav-item mr-3">
        <NavLink 
          to='/home' 
          className='nav-link'
          activeClassName="active"
          onClick={onClick}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item mr-3">
        <NavLink 
          to='/dashboard'
          className='nav-link'
          activeClassName="active"
          onClick={onClick}
        >
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item mr-3">
        <NavLink 
          to='/admin'
          className='nav-link'
          activeClassName="active"
          onClick={onClick}
        >
          Admin
        </NavLink>
      </li>
      
      <li className="nav-item mr-3">
        <button
          className='nav-link btn'
          onClick={onSignOut}
        >
          Sign Out
        </button>
      </li>
    </ul>
  )
}

User.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default User;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames  from 'classnames';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// Components
import Logo from './Logo';

// Redux
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/signOut';

class Navbar extends Component {
  constructor() {
    super();
    this.state={
      show: false
    }
  };

  onClick = () => { this.setState({ show: !this.state.show }); };

  // Sign Out user
  onSignOut = () => {
    this.props.logoutUser();
    this.onClick();
    this.props.history.push('/home');
  }

  render() {
    const { show } = this.state;
    const { isAuthenticated } = this.props.auth;

    // authenticated users
    const authLinks = (
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item mr-3 mt-3">
          <NavLink 
            to='/dashboard'
            className='nav-link'
            activeClassName="active"
            onClick={this.onClick}
            ><span>Dashboard</span></NavLink>
        </li>
        <li className="nav-item mr-3 mt-3">
          <NavLink 
            to='/admin'
            className='nav-link'
            activeClassName="active"
            onClick={this.onClick}
            ><span>Admin</span></NavLink>
        </li>
        
        <li className="nav-item mr-3 mt-3">
          <span
            className='nav-link'
            onClick={this.onSignOut}
            ><span>Sign Out</span></span>
        </li>
      </ul>
    );

    // guest users
    const guestLinks = (
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item mr-3 mt-3">
          <NavLink 
            to='/register' 
            className='nav-link'
            activeClassName="active"
            onClick={this.onClick}
          ><span>Register</span></NavLink>
        </li>
        <li className="nav-item mr-3 mt-3">
          <NavLink 
            to='/login' 
            className='nav-link'
            activeClassName="active"
            onClick={this.onClick}
          ><span>Sign in</span></NavLink>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <button
          className="navbar-toggler" 
          type="button"
          onClick={this.onClick}  
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
          <ul className='navbar-nav mr-auto m-r-5'>
            <li className="nav-item mr-3 mt-3">
            <NavLink 
              to='/home' 
              className='nav-link'
              activeClassName="active"
              onClick={this.onClick}
              ><span>Home</span></NavLink>
            </li>
            <li className="nav-item mr-3 mt-3">
            <NavLink 
              to='/about' 
              className='nav-link'
              activeClassName="active"
              onClick={this.onClick}
              ><span>About</span></NavLink>
            </li>
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    )
  }
};

Navbar.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
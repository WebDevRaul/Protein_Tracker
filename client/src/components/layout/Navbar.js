import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames  from 'classnames';
import { Link } from 'react-router-dom';
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
  }

  render() {
    const { show } = this.state;
    const { isAuthenticated } = this.props.auth;

    // Basic Links
    const home = (
      <li className="nav-item active mr-3 mt-3">
        <Link 
          to='/home' 
          className='nav-link'
          onClick={this.onClick}
          ><span>Home</span></Link>
      </li>
    );
    const about = (
      <li className="nav-item active mr-3 mt-3">
        <Link 
          to='/about' 
          className='nav-link'
          onClick={this.onClick}
          ><span>About</span></Link>
      </li>
    );

    // authenticated users
    const authLinks = (
      <ul className="navbar-nav ml-auto mr-5">
        {home}
        {about}
        <li className="nav-item active mr-3 mt-3">
          <Link 
            to='/dashboard' 
            className='nav-link'
            onClick={this.onClick}
            ><span>Dashboard</span></Link>
        </li>
        <li className="nav-item active mr-3 mt-3">
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
        {home}
        {about}
        <li className="nav-item active mr-3 mt-3">
          <Link 
            to='/register' 
            className='nav-link'
            onClick={this.onClick}
          ><span>Register</span></Link>
        </li>
        <li className="nav-item active mr-3 mt-3">
          <Link 
            to='/login' 
            className='nav-link'
            onClick={this.onClick}
          ><span>Sign in</span></Link>
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
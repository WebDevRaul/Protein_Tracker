import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_isAuth } from '../../redux/selectors/user';

import Logo from '../../components/common/logo/Logo';
import Guest from './Guest';
import User from './User';

const Navbar = ({ isAuth, signOut }) => {
  const [show, setShow] = useState(false);

  const onClick = () => setShow(!show);
  const onSignOut = () => signOut();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Logo />
      <button
        className="navbar-toggler" 
        type="button"
        onClick={onClick}  
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
        { 
          isAuth 
          ? <User show={show} setShow={setShow} onSignOut={onSignOut} /> 
          : <Guest show={show} setShow={setShow} /> 
        }
      </div>
    </nav>
  )
};

Navbar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth
});

export default connect(mapStateToProps, { signOut })(Navbar);
import React, { useState } from 'react';
import classnames from 'classnames';

import Logo from '../../components/common/logo/Logo';
import Guest from './Guest';
import User from './User';

import './navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false);

  const onClick = () => setShow(!show);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      {/* <Logo /> */}
      <button
        className="navbar-toggler" 
        type="button"
        onClick={onClick}  
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
        { false ? <User show={show} setShow={setShow} /> : <Guest show={show} setShow={setShow} /> }
      </div>
    </nav>
  )
}

export default Navbar;
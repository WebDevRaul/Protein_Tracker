import React, { Component } from 'react';
import classnames  from 'classnames';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state={
      show: false
    }
  }

  onClick = () => { this.setState({ show: !this.state.show }); };

  render() {
    const { show } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler" 
          type="button"
          onClick={this.onClick}  
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
          <ul className="navbar-nav ml-auto mr-5">
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
              ><span>Login</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Table from './Table';

// Redux
import { connect } from 'react-redux';
import { findItems } from '../../redux/actions/admin';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      id: 1
    }
  }

  componentDidMount(){
    const { isAuthenticated } = this.props.auth;

    // Fetch items
    if (isAuthenticated) {
      this.props.findItems(this.props.auth.user.id)
    }
  }

  onClick = () => {
    this.setState({ id: this.state.id + 1 });
  }
  
  render() {
    const { id } = this.state;
    return (
      <div className='container'>
        {
          [...Array(id)].map((key, i) => <Table key={i} id={i} />)
        }
        <button onClick={this.onClick} >add table</button>
      </div>
    )
  }
};

Dashboard.propTypes = {

}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect( mapStateToProps, { findItems } )(Dashboard)
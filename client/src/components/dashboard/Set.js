import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import CardFieldGroup from '../common/components/CardFieldGroup';

// Redux
import { connect } from 'react-redux';

class Set extends Component {
  constructor() {
    super();
    this.state = {
      calories: '',
      protein: '',
      fat: '',
      carbohydrates: '',
      errors: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = () => {
    this.props.cancel()
  };

  onSave = () => {
    console.log(this.state.calories)
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="spacial-card text-capitalize font-weight-bold">
        <form noValidate onSubmit={this.onSubmit}>
          <ul className="navbar list-inline">
            <li className="list-inline-item">
              <h5>Calories</h5>
              <CardFieldGroup
                name='calories'
                value={this.state.calories}
                onChange={this.onChange}
                error={errors}
              />
            </li>
            <li className="list-inline-item">
              <h5>Protein</h5>
              <CardFieldGroup
                name='calories'
                value={this.state.protein}
                onChange={this.onChange}
                error={errors}
              />
            </li>
            <li className="list-inline-item">
              <h5>Fat</h5>
              <CardFieldGroup
                name='calories'
                value={this.state.fat}
                onChange={this.onChange}
                error={errors}
              />
            </li>
            <li className="list-inline-item">
              <h5>Carbohydrates</h5>
              <CardFieldGroup
                name='calories'
                value={this.state.carbohydrates}
                onChange={this.onChange}
                error={errors}
              />
            </li>
          </ul>
        </form>
        <button
          className='btn btn-danger float-left'
          onClick={this.onClick}
        >
          Cancel
        </button>
        <button
          className='btn btn-success float-right'
          onClick={this.onSave}
        >
          Save
        </button>
      </div>
    )
  }
};
Set.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect( mapStateToProps, {  } )(Set);
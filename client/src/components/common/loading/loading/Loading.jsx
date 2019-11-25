import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_meal_isLoading } from '../../../../redux/selectors/meal';
import { state_admin_isLoading } from '../../../../redux/selectors/admin';

import './loading.css';


const Loading = ({ admin, loading }) => {
  const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const random = Math.ceil(Math.random() * 10) + 5;

  useEffect(() => {
    const isLoading = setTimeout(() => {
      setLoaded(false);

      // start loading
      if((admin || loading) && width < 80) setWidth(width => width + random);

      // load 2% if loading is still true & width is over 80%
      if((admin || loading) && width >= 80 && width < 95) setWidth(width => width + 2);

      // load complete
      if(!(admin || loading) && width > 5) setWidth(100);

    }, 500);

    const isLoaded = setTimeout(() => {
      if(width === 100) setLoaded(true);
    }, 700);

    return () => {
      clearTimeout(isLoading, isLoaded);
      if(!(admin || loading) && width === 100) {
        setWidth(0);
        setLoaded(true);
      }
    }
  });

  if(loaded) return null;

  return (
    <div className='loading'>
      <div className="bar" style={{width: `${width}%`}}></div>
    </div>
  )
};

Loading.propTypes = {
  meal: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  meal: state_meal_isLoading,
  admin: state_admin_isLoading
});

export default connect(mapStateToProps, null)(Loading);
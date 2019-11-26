import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTarget } from '../../redux/actions/target';
import { updateMeal } from '../../redux/actions/meal';
import { updateAdmin } from '../../redux/actions/admin';
import { createStructuredSelector } from 'reselect';
import { state_target_isDefault } from '../../redux/selectors/target';
import { state_meal_isDefault } from '../../redux/selectors/meal';
import { state_admin_isDefault } from '../../redux/selectors/admin';

import Form from '../../components/admin/form/Form';
import List from '../../components/admin/list/List';

const Admin = ({ updateTarget, updateMeal, updateAdmin, target, meal, admin }) => {
  // Update target CDM
  useEffect(() => {
    if(admin) updateAdmin();
    if(target) updateTarget();
    if(meal) updateMeal();
    // eslint-disable-next-line
  },[]);

  const toScrollTop = () => window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  return (
    <section className='admin mt-5 mb-3'>
      <div className='row no-gutters'>
        <div className='col-10 col-sm-8 col-md-6 col-lg-4 m-auto'>
          <Form />
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='col-11 col-md-10 col-lg-8 m-auto'>
          <List />
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='col-11 col-md-10 col-lg-8 m-auto d-flex justify-content-end align-self-end'>
          <i className="far fa-arrow-alt-circle-up fa-2x hover text-primary mt-4" onClick={toScrollTop}></i>
        </div>
      </div>
    </section>
  )
};

Admin.propTypes = {
  updateTarget: PropTypes.func.isRequired,
  updateMeal: PropTypes.func.isRequired,
  updateAdmin: PropTypes.func.isRequired,
  target: PropTypes.bool.isRequired,
  meal: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  target: state_target_isDefault,
  meal: state_meal_isDefault,
  admin: state_admin_isDefault
});

export default connect(mapStateToProps, { updateTarget, updateMeal, updateAdmin })(Admin);
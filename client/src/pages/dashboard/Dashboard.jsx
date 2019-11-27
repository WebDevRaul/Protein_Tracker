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
import Table from '../../components/dashboard/table/Table';
import Meals from '../../components/dashboard/meals/Meals';

const Dashboard = ({ updateTarget, updateMeal, updateAdmin, target, meal, admin }) => {
  // Update target CDM
  useEffect(() => {
    if(target) updateTarget();
    if(meal) updateMeal();
    if(admin) updateAdmin();
    // eslint-disable-next-line
  },[])
  return (
    <section className='dashboard'>
      <Table />
      <div className='row no-gutters mt-2 mb-2'>
        <div className='col-11 m-auto'>
          <p className='mb-0 text-muted font-weight-bold text-center'>Choise your meal of the day!</p>
        </div>
      </div>
      <Meals />
    </section>
  )
};

Dashboard.propTypes = {
  updateTarget: PropTypes.func.isRequired,
  updateMeal: PropTypes.func.isRequired,
  updateAdmin: PropTypes.func.isRequired,
  target: PropTypes.bool.isRequired,
  meal: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  target: state_target_isDefault,
  admin: state_meal_isDefault,
  meal: state_admin_isDefault
});

export default connect(mapStateToProps, { updateTarget, updateMeal, updateAdmin })(Dashboard);
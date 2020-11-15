import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import GetHolidays from '../../components/GetHolidays';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Team from '../../components/Team';
import  ReduxSchedulerContainer from '../../components/ClassSchedule';
import AddEvent from '../../components/AddEvent';
import Calendar1 from '../../components/Calendar'

const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/team" component={Team} />
        
        <Route exact path="/GetHolidays" component={GetHolidays} />
        <Route exact path="/AddEvent" component={AddEvent} />
        <Route exact path="/Calendar" component={Calendar1} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

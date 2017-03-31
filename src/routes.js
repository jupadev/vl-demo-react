import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {PrivateRoute, Authorization} from './components';
import App from './containers/App/App';
import HomePage from './containers/HomePage/HomePage';
import LoginPage from './containers/Login/LoginPage';
import StudentPage from './containers/Student/StudentDashboard';
import EmployerPage from './containers/Employer/EmployerDashboard';
import AdminPage from './containers/Admin/AdminDashboard';
import NotFoundPage from './containers/NotFound/NotFoundPage';

const StudentAllowed = Authorization(['member']);
const EmployerAllowed = Authorization(['employer']);
const AdminAllowed = Authorization(['admin', 'superadmin']);

export default (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/student" component={StudentAllowed(StudentPage)}/>
        <PrivateRoute exact path="/employer" component={EmployerAllowed(EmployerPage)}/>
        <PrivateRoute exact path="/admin" component={AdminAllowed(AdminPage)}/>
        <Route component={NotFoundPage} />
      </Switch>
    </App>
  </Router>
);

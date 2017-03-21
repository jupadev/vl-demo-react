import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './containers/App';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import EmployerPage from './containers/employer/EmployerDashboard';
import NotFoundPage from './components/NotFoundPage';


const PrivateRoute = ({ component, ...rest }) => {
  const user = {
    isAuthenticated: false
  }
  return (<Route {...rest} render={props => (
    user.isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>)
}

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to
// other React components.
// IndexRoute maps HomePage component to the default route
export default (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/employer" component={EmployerPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </App>
  </Router>
);

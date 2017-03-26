import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {  
  render() {
    const { isAuthenticated, user, component, ...rest } = this.props;
    return (<Route {...rest} render={(props) => {
        if (isAuthenticated) {
          return React.createElement(component, Object.assign(props, {user}));
        } else {
          return (<Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>);
        }
      }
    }/>)
  }
}

function mapStateToProps({ auth }) {
  return { 
    isAuthenticated: auth.isAuthenticated,
    user: auth.user
  };
}

export default connect(mapStateToProps)(PrivateRoute);

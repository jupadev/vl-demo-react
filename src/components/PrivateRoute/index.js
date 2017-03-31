import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {  
  render() {
    const { isAuthenticated, user, component, needRedirect, ...rest } = this.props;
    return (<Route {...rest} render={(props) => {
        if (isAuthenticated) {
          return React.createElement(component, Object.assign(props, {user}));
        } else {
          return (<Redirect to={{
            pathname: '/login',
            state: { from: props.location },
            needRedirect
          }}/>);
        }
      }
    }/>)
  }
}

function mapStateToProps({ auth }) {
  return { 
    needRedirect: auth.needRedirect,
    isAuthenticated: auth.isAuthenticated,
    user: auth.user
  };
}

export default connect(mapStateToProps)(PrivateRoute);

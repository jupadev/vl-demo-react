import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {  
  render() {
    const { isAuthenticated, component, needRedirect, isLoging,...rest } = this.props;
    return (<Route {...rest} render={(props) => {
        if (isAuthenticated) {
          return React.createElement(component, Object.assign(props, {...rest}));
        } else if (isLoging) {
          return <div>Loading...</div>
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
    isLoging: auth.isLoging,
    user: auth.user
  };
}

export default connect(mapStateToProps)(PrivateRoute);

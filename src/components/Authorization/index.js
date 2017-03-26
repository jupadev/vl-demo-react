import React, {Component} from 'react';
import {getRoles} from '../../utils/user';
import Forbidden from './components/Forbidden';

const Authorization = (allowedRoles) => {
  return (WrappedComponent) => {
    return class WithAuthorization extends Component {
      isAllowed(allowedRoles, roles) {
        return allowedRoles.find((role)=> roles.indexOf(role) > -1);
      }

      render() {
        const { user } = this.props;
        const roles = getRoles(user);
        if (user && this.isAllowed(allowedRoles,roles)) {
          return <WrappedComponent {...this.props} />
        } else {
          return <Forbidden />
        }
      }
    }
    
  }
}

export default Authorization;
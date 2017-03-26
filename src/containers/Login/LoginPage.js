import React from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { onLoginAction } from './actions';
import LoginForm from './components/LoginForm';


class LoginPage extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      if (from && from.pathname !== '/login' && from.pathname !== '/') {
        return (<Redirect to={from}/>);
      } else {
        return (<Redirect to={{
          pathname: '/student'
        }}/>);
      }
    }

    return <LoginForm 
      onLoginClick={this.props.onLoginClick} isLoging={this.props.isLoging}/>
  }
}
 // Subscribe component to redux store and merge the state into
 // component's props
 // select a subset of props from the global store and
 // will be passing to the dumb component
 // initial {user: null, isLoging: false}
const mapStateToProps = ({auth}) => {
  return auth;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (user, password) => {
      dispatch(onLoginAction(user, password))
    }
  }
};

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

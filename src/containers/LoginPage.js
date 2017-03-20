import { connect } from 'react-redux';
import { onLoginAction } from '../actions/loginActions';
import LoginForm from '../components/LoginForm';


 // Subscribe component to redux store and merge the state into
 // component's props
 // select a subset of props from the global store and
 // will be passing to the dumb component
 // initial {user: null, isLoging: false}
const mapStateToProps = ({ login }) => {
  return login;
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
)(LoginForm);

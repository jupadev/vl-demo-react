import * as types from './actionTypes';
import * as api from '../../Api/api';
import { setAuthtoken } from '../../utils/request';
// Returns an action type, SELECTED_IMAGE and the image selected

export const onLoginAction = (email, password) => {
  return (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST})
    api.login(email, password)
      .then(response => dispatch(loginSuccess(response)))
      .catch(error => dispatch(onError(error)))
  }
};

export const onLogoutAction = () => {
  setAuthtoken();
  return (dispatch) => {
    dispatch({type: types.LOGOUT_SUCCESS})
  }
};

export const loadUser = (userId) => {
  return (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST});
    api.loadUser(userId)
      .then(response => dispatch(onLoadUserSuccess(response)))
      .catch(error => dispatch(onError(error)))
  }
};

function loginSuccess(results) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: results.actor
  };
}

function onError(error) {
  return {
    type: types.LOGIN_ERROR,
    error: error
  };
}

function onLoadUserSuccess(results) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: results
  };
}


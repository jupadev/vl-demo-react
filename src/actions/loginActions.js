import * as types from '../constants/loginActionTypes';
import * as api from '../Api/api';
// Returns an action type, SELECTED_IMAGE and the image selected

export const onLoginAction = (email, password) => {
  return (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST})
    api.login(email, password)
      .then(response => dispatch(loginSuccess(response)))
      .catch(error => dispatch(loginFail(error)))
  }
};

function loginSuccess(results) {
  return {
    type: types.LOGIN_SUCCESS,
    results: results
  };
}

function loginFail(error) {
  return {
    type: types.LOGIN_ERROR,
    error: error
  };
}

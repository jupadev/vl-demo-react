import * as types from './actionTypes';
import { filterActions } from 'redux-ignore';

const initialState = {
  user: null,
  isLoging: false,
  isAuthenticated: false,
  needRedirect: true
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {...state, user: null, isLoging: true, isAuthenticated: false};
    case types.LOGIN_SUCCESS:
      return {...state, user: action.payload, isLoging: false, isAuthenticated: true};
    case types.LOGIN_ERROR:
      return { ...state, user: null, isLoging: false, isAuthenticated: false};
    case types.LOGOUT_SUCCESS:
      return { ...state, user: null, isLoging: false, isAuthenticated: false, needRedirect: false};
    default:
      return state;
  }
}


export default filterActions(reducer, (action) => action.type.match(/^LOGIN_|^LOGOUT_/));
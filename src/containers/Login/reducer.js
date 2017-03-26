import * as types from './actionTypes';
const initialState = {
  user: null,
  isLoging: false,
  isAuthenticated: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {...state, user: null, isLoging: true, isAuthenticated: false};
    case types.LOGIN_SUCCESS:
    case types.LOAD_SUCCESS:
      return {...state, user: action.payload, isLoging: false, isAuthenticated: true};
    case types.LOGIN_ERROR:
    case types.LOGOUT_SUCCESS:
      return { ...state, user: null, isLoging: false, isAuthenticated: false};
    default:
      return state;
  }
}

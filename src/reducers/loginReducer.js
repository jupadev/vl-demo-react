import * as types from '../constants/loginActionTypes';
const initialState = {
  user: null,
  isLoging: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      console.log(types.LOGIN_REQUEST);
      return {...state, user: null, isLoging: true};
    case types.LOGIN_SUCCESS:
      console.log(types.LOGIN_SUCCESS);
      return {...state, user: action.user, isLoging: false};
    case types.LOGIN_FAIL:
      return { ...state, user: null, isLoging: false };
    default:
      return state;
  }
}

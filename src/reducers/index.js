import { combineReducers } from 'redux';
import auth from '../containers/Login/reducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  auth: auth
});


export default rootReducer;

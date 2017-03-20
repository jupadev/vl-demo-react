import { combineReducers } from 'redux';
import login from './loginReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  login
});

export default rootReducer;

import { combineReducers } from 'redux';
import auth from '../containers/Login/reducer';
import employerJobs from '../containers/Employer/EmployerJobs/reducer';
// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  auth,
  employerJobs
});


export default rootReducer;

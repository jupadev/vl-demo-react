import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';
import login from './loginReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  images,
  videos,
  login
});

export default rootReducer;

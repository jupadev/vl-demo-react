import { JOBS_REQUEST, JOBS_SUCCESS, JOBS_ERROR } from './actions';
import { filterActions } from 'redux-ignore';

const initialState = {
  jobs: [],
  error: null,
  isLoading: false
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case JOBS_REQUEST:
      return {...state, isLoading: true};
    case JOBS_SUCCESS:
      return {...state, jobs: action.payload, isLoading: false};
    case JOBS_ERROR:
      return { ...state, isLoading: false};
    default:
      return state;
  }
}


export default filterActions(reducer, (action) => action.type.match(/^JOBS_/));
import { getEntities } from '../../../Api/api';
export const JOBS_REQUEST = 'JOBS_REQUEST';
export const JOBS_SUCCESS = 'JOBS_SUCCESS';
export const JOBS_ERROR = 'JOBS_ERROR';

const ENTITY = 'jobs';
// Returns an action type, SELECTED_IMAGE and the image selected

export const onGetRequest = (filters = {}) => {
  return (dispatch) => {
    dispatch({type: JOBS_REQUEST})
    getEntities(ENTITY, filters)
      .then(response => dispatch(onSuccess(response)))
      .catch(error => dispatch(onError(error)))
  }
};

function onSuccess(results) {
  return {
    type: JOBS_SUCCESS,
    payload: results.data
  };
}

function onError(error) {
  return {
    type: JOBS_ERROR,
    error: error
  };
}



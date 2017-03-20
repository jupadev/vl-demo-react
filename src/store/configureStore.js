import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';
//import rootSaga from '../sagas'; // TODO: Next step

//  Returns the store instance
// It can  also take initialState argument when provided
const configureStore = () => {
  const middlewares = [reduxThunk];
  return {
    ...createStore(rootReducer,
      applyMiddleware(...middlewares))
  };
};

export default configureStore;

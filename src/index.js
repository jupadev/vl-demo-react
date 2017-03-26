import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Localcache from './utils/localcache';

import { loadUser } from './containers/Login/actions'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Initialize store
const store = configureStore();
injectTapEventPlugin();

//Reload page once the user is logged
// Check for userId and update application state if required
const userId = Localcache.get('userId');
if (userId) {
  store.dispatch(loadUser(userId));
}

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
    { routes }
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

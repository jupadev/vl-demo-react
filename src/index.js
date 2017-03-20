import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Initialize store
const store = configureStore();
injectTapEventPlugin();

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
    { routes }
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

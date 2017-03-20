import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './containers/App';
import HomePage from './components/HomePage';
import MediaGallery from './containers/MediaGalleryPage';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './components/NotFoundPage';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to
// other React components.
// IndexRoute maps HomePage component to the default route
export default (
  <Router>
    <App>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/library" component={MediaGallery} />
      <Route exact path="/login" component={LoginPage} />
      <Route component={NotFoundPage} />
      </Switch>
    </App>
  </Router>
);

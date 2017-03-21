import React from 'react';
import { Link } from 'react-router-dom';

// Home page component. This serves as the welcome page with link to the library
const NotFoundPage = () => (
  <div className="mdl-typography--text-center">
    <h1>Ups! 404 content not found!</h1>
    <Link to="/">
      <button className="mdl-button mdl-js-button mdl-button--raised">Home page</button>
    </Link>
  </div>
);

export default NotFoundPage;

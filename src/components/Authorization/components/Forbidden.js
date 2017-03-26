import React from 'react';
import { Link } from 'react-router-dom';

// Home page component. This serves as the welcome page with link to the library
const Forbidden = () => (
  <div className="mdl-typography--text-center">
    <h1>403 Forbidden, You dont have the right access!</h1>
    <Link to="/">
      <button className="mdl-button mdl-js-button mdl-button--raised">Home page</button>
    </Link>
  </div>
);

export default Forbidden;

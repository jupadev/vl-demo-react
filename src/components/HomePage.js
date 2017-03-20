import React from 'react';
import { Link } from 'react-router-dom';

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="page-content">
    <h1>Welcome to Viridis!</h1>
    <Link to="library">
      <button className="mdl-button mdl-js-button mdl-button--raised"> Visit Library</button>
    </Link>
  </div>
);

export default HomePage;

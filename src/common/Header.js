import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Viridis</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation">
          <NavLink to="/" className="mdl-navigation__link" activeClassName="active">Home</NavLink>
          {" | "}
          <NavLink to="library" className="mdl-navigation__link" activeClassName="active">Library</NavLink>
        </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Viridis</span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  </div>
);

export default Header;

import React, {Component}from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { onLogoutAction } from '../../../Login/actions';
import viridisLogo from '../../../../assets/viridis-logo.svg';
import './header.css';


class Header extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.onLogoutAction();
  }


  render() {
    const guestUsers = (
      <nav className="mdl-navigation">
        <NavLink to="/" className="mdl-navigation__link" activeClassName="active">Home</NavLink>
        {" | "}
        <NavLink to="login" className="mdl-navigation__link" activeClassName="active">Login</NavLink>
      </nav>
    );

    const loggedUsers = (
      <nav className="mdl-navigation">
        <NavLink to="/" className="header__link" activeClassName="active">Home</NavLink>
        {" | "}
        <a href="#" className="header__link" onClick={this.onLogout.bind(this)}>logout</a>
        {" | "}
        <NavLink to="employer" className="header__link" activeClassName="active">Employer</NavLink>
      </nav>
    );

    const {isAuthenticated} = this.props;
    return (
        <header className="mdl-layout__header header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              <img src={viridisLogo} className="viridis-logo" alt="viridis logo"/>
            </span>
            <div className="mdl-layout-spacer"></div>
            {isAuthenticated ? loggedUsers : guestUsers}
          </div>
        </header>
    );
  }
}


const mapStateToProp = ({auth}) => {
  return auth;
}

export default connect(mapStateToProp, { onLogoutAction })(Header);
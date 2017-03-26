import React, {Component}from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { onLogoutAction } from '../../Login/actions';



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
        <NavLink to="/" className="mdl-navigation__link" activeClassName="active">Home</NavLink>
        {" | "}
        <a href="#" className="mdl-navigation__link" onClick={this.onLogout.bind(this)}>logout</a>
        {" | "}
        <NavLink to="employer" className="mdl-navigation__link" activeClassName="active">Employer</NavLink>
      </nav>
    );

    const {isAuthenticated} = this.props;
    return (
      <div>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Viridis</span>
            <div className="mdl-layout-spacer"></div>
            {isAuthenticated ? loggedUsers : guestUsers}
          </div>
        </header>
      </div>
    );
  }
}


const mapStateToProp = ({auth}) => {
  return auth;
}

export default connect(mapStateToProp, { onLogoutAction })(Header);
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <div className="mdl-layout__content">
        {this.props.children}
        </div>
        <div className="mdl-layout__obfuscator"/>
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default App;

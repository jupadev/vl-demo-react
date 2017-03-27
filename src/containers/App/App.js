import React, { Component, PropTypes } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import '../../styles/index.css';
import './App.css';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
    
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <main className="mdl-layout__content page-content" >
          {this.props.children}
        </main>
        <Footer />
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

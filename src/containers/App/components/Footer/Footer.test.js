import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './index';

it('renders Main Footer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';

const mockStore = configureMockStore([thunk]);
describe('Header Component without authentication', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      auth: {
        user: null,
        isAuthenticated: false
      },
    });
  });
  it('renders Header without crashing', () => {
    const div = document.createElement('div');
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>, div);
    expect(wrapper.find(Header).length).toEqual(1);
    const wrapperHeader = wrapper.find(Header);
    expect(wrapperHeader.find(NavLink).length).toEqual(2);
    expect(wrapperHeader.find('a[href="login"]').length).toEqual(1);
  });
});


describe('Header Component with authentication', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      auth: {
        user: {
          _id: '123123123123',
          pimaryName: 'Oswald',
          secundaryName: 'Mylan'
        },
        isAuthenticated: true
      },
    });
  });
  it('renders Header without crashing', () => {
    const div = document.createElement('div');
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>, div);
    expect(wrapper.find(Header).length).toEqual(1);
    const wrapperHeader = wrapper.find(Header);
    //console.log(wrapperHeader.debug());
    expect(wrapperHeader.find(NavLink).length).toEqual(2); // Home and employer nav links
    expect(wrapperHeader.find('a[href="login"]').length).toEqual(0); //it doesnt exists login
    expect(wrapperHeader.containsMatchingElement(<a href="#">logout</a>)).toEqual(true); //exists a logout link
  });
});

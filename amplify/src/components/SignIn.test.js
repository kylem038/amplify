import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './SignIn';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignIn />, div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './Settings';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Settings />, div);
});

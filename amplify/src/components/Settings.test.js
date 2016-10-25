import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './Settings';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Settings />, div);
});

it('renders a section with a class of Settings', () => {
  const wrapper = shallow(<Settings />);

  expect(wrapper.contains(<section class='Settings'></section>)).to.equal(true);
});

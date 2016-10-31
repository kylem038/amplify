import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './SignIn';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignIn />, div);
});

describe('log in page', () => {

  it('should have a log in button', () => {
    const wrapper = shallow(<SignIn />);

    expect(wrapper.is('.SignIn')).toEqual(true);
  });
});

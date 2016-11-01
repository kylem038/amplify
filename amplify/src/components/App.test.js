import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import SignIn from './SignIn'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('homepage', () => {

  it('should have an h1', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.is(h1)).toEqual(true);
  });
});

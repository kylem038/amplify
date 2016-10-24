import React from 'react';
import ReactDOM from 'react-dom';
import BandMates from './BandMates';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BandMates />, div);
});

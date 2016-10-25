import React from 'react';
import ReactDOM from 'react-dom';
import Instruments from './Instruments';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Instruments />, div);
});

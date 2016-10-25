import React from 'react';
import ReactDOM from 'react-dom';
import Genres from './Genres';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Genres />, div);
});

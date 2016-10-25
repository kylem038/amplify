import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Match, Miss } from 'react-router'
require("!style!css!sass!./style/index.scss");

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Match exactly pattern='/' component={App} />
    </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

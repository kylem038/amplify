import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';
import * as actions from './actions/auth';

require("!style!css!sass!./style/index.scss");

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,
  document.getElementById('root')
);

store.dispatch(actions.startListeningToAuth());

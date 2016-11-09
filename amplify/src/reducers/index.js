import { combineReducers } from 'redux';
import auth from './auth';
import settings from './settings';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  auth,
  settings,
  dashboard
});

export default rootReducer;

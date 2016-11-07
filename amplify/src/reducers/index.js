import { combineReducers } from 'redux';
import auth from './auth';
import settings from './settings';

const rootReducer = combineReducers({
  auth,
  settings
});

export default rootReducer;

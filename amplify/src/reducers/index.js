import { combineReducers } from 'redux';
import auth from './auth';
import instruments from './instruments';

const rootReducer = combineReducers({
  auth,
  instruments
});

export default rootReducer;

import { combineReducers } from 'redux';
import authReducer from './auth';
import toggleCheckedReducer from './toggleChecked';
import sendCheckedReducer from './sendChecked';

const rootReducer = combineReducers({
  authReducer,
  toggleCheckedReducer,
  sendCheckedReducer
});

export default rootReducer;

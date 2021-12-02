import { combineReducers } from 'redux';
import user from './user';
import network from './network';
import data from './data';

let rootReducer = combineReducers({
  user,
  data,
  network,
});

export default rootReducer;

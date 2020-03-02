import { combineReducers } from 'redux';

import auth from './auth/auth';
import establishments from './establishments'
import camera from './camera'

const reducers = combineReducers({
  auth,
  establishments,
  camera
});

export default reducers;
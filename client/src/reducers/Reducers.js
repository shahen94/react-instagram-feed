import { combineReducers } from 'redux';
import {
  routerReducer as routing
} from 'react-router-redux';

import {
  FeedReducer as feed,
  ProfileReducer as profile
} from '../modules';

export default combineReducers({
  feed,
  profile,
  routing
});

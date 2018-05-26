import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import movies from './movies';

export default combineReducers({
  movies,
  routing,
});

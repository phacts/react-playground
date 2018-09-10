import { combineReducers } from 'redux';

import seriesReducer from './seriesReducer';

export default combineReducers(
  {
    series: seriesReducer,
  }
);
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import rootReducer from './reducers'; 
const initialState = {};

// const myLogger = (store) => (next) => (action) => {
//   console.log('action fired', action);
//   next(action);
// }

const myError = (store) => (next) => (action) => {
  try {
    next(action);
  }
  catch(e) {
    console.log("Error encountered in action.", e);
  }
}

const middleware = [thunk, logger, myError];

const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // add in redux devtools functionality if the extension is present
  )
);

export default store;

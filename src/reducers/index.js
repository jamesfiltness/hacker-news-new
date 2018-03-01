import { combineReducers } from 'redux';
import  { dummyReducer } from './dummy-reducer';
import  { navReducer } from './nav-reducer';

console.log('NA', navReducer);

// Root Reducer
const rootReducer = combineReducers({
  dummy: dummyReducer,
  nav: navReducer,
});

export default rootReducer

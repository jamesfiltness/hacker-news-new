import { combineReducers } from 'redux';
import  { dummyReducer } from './dummy-reducer';

// Root Reducer
const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export default rootReducer

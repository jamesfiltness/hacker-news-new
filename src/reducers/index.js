import { combineReducers } from 'redux';
import  { navReducer } from './nav-reducer';
import  { topStories } from './top-stories';

// Root Reducer
const rootReducer = combineReducers({
  nav: navReducer,
  topStories,
});

export default rootReducer

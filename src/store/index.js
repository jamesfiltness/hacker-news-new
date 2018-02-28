// Redux Store Configuration
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { middleware } from '../utils/redux';

const configureStore = (initialState: {}) => {
  const middleware = applyMiddleware(
    middleware,
  );

  return createStore(rootReducer, middleware);
};

export default configureStore;

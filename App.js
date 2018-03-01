import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/app-navigator';
import { middleware } from './src/utils/redux';

const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
);

class HackerNewsReactNative extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default HackerNewsReactNative

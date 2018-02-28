import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import AppWithNavigationState from './src/navigators/app-navigator';

const store = configureStore({});

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

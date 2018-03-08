import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../navigators/app-navigator';

export function navReducer(state, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined
  return nextState || state;
}

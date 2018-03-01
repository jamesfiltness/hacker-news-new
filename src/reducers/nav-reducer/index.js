import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../navigators/app-navigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Jobs');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export function navReducer(state = initialNavState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined
  return nextState || state;
}

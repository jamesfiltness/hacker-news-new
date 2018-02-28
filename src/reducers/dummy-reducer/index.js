import * as types from '../../actions/action-types';

export function dummyReducer(state = 'SOME DEFAULT', action) {
  switch (action.type) {
    case 'SOME_ACTION':
      return 'Done something!'
    default:
      return state
  }
}

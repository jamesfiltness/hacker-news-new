import * as types from '../../actions/action-types';

export function topStories(state = [], action) {
  switch (action.type) {
    case 'FETCH_TOP_STORIES_REQUEST':
      return state
    case 'TOP_STORY_DATA':
      return action.json
    default:
      return state
  }
}

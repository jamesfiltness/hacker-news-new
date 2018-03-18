import * as types from '../action-types';

export function topStories() {
  const actions = [
    types.FETCH_TOP_STORIES_REQUEST,
    types.TOP_STORY_DATA,
    types.FETCH_TOP_STORIES_ERROR,
  ];

  return {
    actions,
    promise: {
      // TODO work out how to best manage config in react native
      url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
      headers: {},
      params: {},
    },
  }
}

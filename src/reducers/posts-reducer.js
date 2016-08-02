import { ActionTypes } from '../actions';

const postsReducer = (state = { posts: { all: [], post: null } }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.result };
    default:
      return state;
  }
};

export default postsReducer;

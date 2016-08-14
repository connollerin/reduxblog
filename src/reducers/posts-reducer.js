import { ActionTypes } from '../actions';

const postsReducer = (state = { all: [], post: null }, action) => { // figure out how posts interacts with all and post
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.payload.all };
    case ActionTypes.FETCH_POST:
      return { ...state, post: action.payload.post };
    default:
      return state;
  }
};

export default postsReducer;

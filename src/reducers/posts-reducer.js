import { ActionTypes } from '../actions';

const postsReducer = (state = { all: [], post: null }, action) => { // figure out how posts interacts with all and post
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.payload };
    case ActionTypes.FETCH_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
};

export default postsReducer;

import axios from 'axios';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=e_connolly';

export function fetchPosts() {
  return (dispatch) => {
      // for get
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      // do something with response.data  (some json)
      dispatch({ type: 'FETCH_POSTS', payload: { all: response.all, post: response.post } });
    }).catch(error => {
      // hit an error do something else!
      console.log('error with fetching');
    });
  };
}

// for post and put
// const fields = { title: '', contents: '', tags: '' };
// axios.post(`${ROOT_URL}/posts${API_KEY}`, fields);

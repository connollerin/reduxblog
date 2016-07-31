import axios from 'redux-thunk';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=e_connolly';

// for get
axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
  // do something with response.data  (some json)
}).catch(error => {
  // hit an error do something else!
});

// for post and put
const fields = { title: '', contents: '', tags: '' };
axios.post(`${ROOT_URL}/posts${API_KEY}`, fields);

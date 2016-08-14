import axios from 'axios';
import { browserHistory } from 'react-router';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const ROOT_URL = 'https://hw5pt1.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://authhw5.herokuapp.com/api';
const API_KEY = '';

export function fetchPosts() {
  return (dispatch) => {
      // for get
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      // do something with response.data  (some json)
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch(error => {
      // hit an error do something else!
      console.log('error with fetching');
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      console.log(response.data);
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch(error => {
      console.log('Error getting post');
    });
  };
}

export function createPost(post) {
  return (dispatch) => {
    // const fields = { title: post.title, content: post.content, tags: post.tags };
    axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error creating posts');
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    // const fields = { title: post.title, content: post.content, tags: post.tags };
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
    }).catch(error => {
      console.log('Error updating post');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error deleting post');
    });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/`, { email, password }). // is that address right?
    then(response => {
      dispatch({ type: ActionTypes.AUTH_USER }); // do we need to add payload.email?
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      localStorage.removeItem('token');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/`, { email, password }).
    then(response => {
      dispatch({ type: ActionTypes.AUTH_USER }); // do we need to add payload.email?
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      localStorage.removeItem('token');
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

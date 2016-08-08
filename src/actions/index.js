import axios from 'axios';
import { browserHistory } from 'react-router';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const ROOT_URL = 'http://hw5pt1.herokuapp.com/api';
const API_KEY = '?key=e_connolly';

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
    const fields = { title: post.title, content: post.content, tags: post.tags };
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, fields).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error creating posts');
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    const fields = { title: post.title, content: post.content, tags: post.tags };
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, fields).then(response => {
    }).catch(error => {
      console.log('Error updating post');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error deleting post');
    });
  };
}

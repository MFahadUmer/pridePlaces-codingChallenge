import axios from 'axios';
import {
  FETCH_BLOG_FAILURE,
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
} from './blogActionTypes';

const header = {
  header: {
    'Content-Type': 'application/json',
  },
};

export const fetchBlogRequest = () => ({
  type: FETCH_BLOG_REQUEST,
});

export const fetchBlogSuccess = (data) => ({
  type: FETCH_BLOG_SUCCESS,
  payload: data,
});

export const fetchBlogFailure = (error) => ({
  type: FETCH_BLOG_FAILURE,
  payload: error,
});

export const fetchBlog = () => (dispatch) => {
  dispatch(fetchBlogRequest());
  axios.get('https://jsonplaceholder.typicode.com/posts/', header)
    .then((response) => {
      const posts = response.data;
      dispatch(fetchBlogSuccess(posts));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchBlogFailure(errorMsg));
    });
};

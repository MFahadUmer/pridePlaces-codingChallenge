import axios from 'axios';
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from './userActionTypes';

const header = {
  header: {
    'Content-Type': 'application/json',
  },
};

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUser = () => (dispatch) => {
  dispatch(fetchUserRequest());
  axios.get('https://jsonplaceholder.typicode.com/users/', header)
    .then((response) => {
      const posts = response.data;
      dispatch(fetchUserSuccess(posts));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchUserFailure(errorMsg));
    });
};

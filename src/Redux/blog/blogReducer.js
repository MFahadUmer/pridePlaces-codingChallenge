import { FETCH_BLOG_FAILURE, FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS } from './blogActionTypes';

const initialState = {
  fetchStatus: false,
  data: [],
  error: '',
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_REQUEST:
      return {
        ...state,
        fetchStatus: true,
      };
    case FETCH_BLOG_SUCCESS:
      return {
        ...state,
        fetchStatus: false,
        data: action.payload,
        error: '',
      };
    case FETCH_BLOG_FAILURE:
      return {
        ...state,
        fetchStatus: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default blogReducer;

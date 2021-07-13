import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './userActionTypes';

const initialState = {
  fetchStatus: false,
  users: [],
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        fetchStatus: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchStatus: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USER_FAILURE:
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

export default userReducer;

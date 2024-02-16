import {
  GET_ALL_POSTS_ERROR,
  GET_ALL_POSTS_LOADING,
  GET_ALL_POSTS_SUCCESS,
  EDIT_POST_ERROR,
  EDIT_POST_LOADING,
  EDIT_POST_SUCCESS,
  CREATE_POST_ERROR,
  CREATE_POST_SUCCESS,
  CREATE_POST_LOADING,
  DELETE_POST_ERROR,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
} from "../constants/actionTypesPostCrud";

export const postCrudReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        posts: [state.post, ...action.payload],
      };

    case GET_ALL_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: action.payload,
        posts: [],
      };

    case CREATE_POST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        post: action.payload,
      };
    case CREATE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        post: {},
      };

    case DELETE_POST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        post: {},
        message: "Deleted Successfully",
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case DELETE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        post: {},
      };

    case EDIT_POST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        post: action.payload,
      };
    case EDIT_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        post: {},
      };
    default:
      return state;
  }
};

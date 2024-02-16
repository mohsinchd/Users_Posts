import {
  GET_ALL_POSTS_LOADING,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_ERROR,
  GET_ALL_COMMENTS_LOADING,
  DELETE_POSTS_LOADING,
  DELETE_POSTS_ERROR,
  DELETE_POSTS_SUCCESS,
} from "../constants/actionTypesPosts";

export const postsReducer = (state, action) => {
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
        posts: action.payload,
      };
    case GET_ALL_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        posts: [],
      };
    case GET_ALL_COMMENTS_LOADING:
      return {
        ...state,
        modalLoading: true,
      };
    case GET_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        modalLoading: false,
        isError: false,
        comments: action.payload,
      };
    case GET_ALL_COMMENTS_ERROR:
      return {
        ...state,
        modalLoading: false,
        isError: true,
        error: action.payload,
        comments: [],
      };
    case DELETE_POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.filter(
          (post) => String(post.id) !== String(action.payload)
        ),
      };
    case DELETE_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

import {
  GET_USER_POSTS,
  GET_ALL_COMMENTS,
  DELETE_POSTS,
} from "../constants/actionTypesPosts";
import { LOADING, SUCCESS, ERROR } from "../constants/commonActionTypes";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_USER_POSTS + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_POSTS + SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        posts: action.payload,
      };
    case GET_USER_POSTS + ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        posts: [],
      };
    case GET_ALL_COMMENTS + LOADING:
      return {
        ...state,
        modalLoading: true,
      };
    case GET_ALL_COMMENTS + SUCCESS:
      return {
        ...state,
        modalLoading: false,
        isError: false,
        comments: action.payload,
      };
    case GET_ALL_COMMENTS + ERROR:
      return {
        ...state,
        modalLoading: false,
        isError: true,
        error: action.payload,
        comments: [],
      };
    case DELETE_POSTS + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_POSTS + SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.filter(
          (post) => String(post.id) !== String(action.payload)
        ),
      };
    case DELETE_POSTS + ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

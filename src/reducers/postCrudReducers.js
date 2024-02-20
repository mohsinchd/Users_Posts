import {
  GET_ALL_POSTS,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
} from "../constants/actionTypesPostCrud";
import { LOADING, SUCCESS, ERROR } from "../constants/commonActionTypes";

export const postCrudReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_POSTS + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_POSTS + SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        posts: [state.post, ...action.payload],
      };

    case GET_ALL_POSTS + ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: action.payload,
        posts: [],
      };

    case CREATE_POST + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_POST + SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        post: action.payload,
      };
    case CREATE_POST + ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        post: {},
      };

    case DELETE_POST + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_POST + SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        post: {},
        message: "Deleted Successfully",
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case DELETE_POST + ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        post: {},
      };

    case EDIT_POST + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_POST + SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        post: action.payload,
      };
    case EDIT_POST + ERROR:
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

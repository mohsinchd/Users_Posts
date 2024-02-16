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

import { NetworkRequest } from "../utils/networkRequests";

import { handleApiCall } from "../utils/helpers";

export const createNewPost = async (dispatch, newData) => {
  handleApiCall(
    dispatch,
    CREATE_POST_LOADING,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
    NetworkRequest.createNewPost,
    newData
  );
};

export const deletePost = async (dispatch, id) => {
  handleApiCall(
    dispatch,
    DELETE_POST_LOADING,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR,
    NetworkRequest.deletePost,
    id
  );
};

export const editPost = async (dispatch, id, newData) => {
  handleApiCall(
    dispatch,
    EDIT_POST_LOADING,
    EDIT_POST_SUCCESS,
    EDIT_POST_ERROR,
    NetworkRequest.editPost,
    id,
    newData
  );
};

export const getPosts = async (dispatch, query, abort) => {
  handleApiCall(
    dispatch,
    GET_ALL_POSTS_LOADING,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_ERROR,
    NetworkRequest.getPosts,
    query,
    abort
  );
};

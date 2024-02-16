import { handleApiCall } from "../utils/helpers";

import { NetworkRequest } from "../utils/networkRequests";

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

export const getUserPosts = async (
  dispatch,
  id,
  abortController,
  limit = 5,
  page = 1
) => {
  await handleApiCall(
    dispatch,
    GET_ALL_POSTS_LOADING,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_ERROR,
    NetworkRequest.getUserPost,
    id,
    page,
    limit,
    abortController
  );
};

export const getPostComments = async (dispatch, id) => {
  await handleApiCall(
    dispatch,
    GET_ALL_COMMENTS_LOADING,
    GET_ALL_COMMENTS_SUCCESS,
    GET_ALL_COMMENTS_ERROR,
    NetworkRequest.getPostComment,
    id
  );
};

export const filterPosts = async (dispatch, id) => {
  await handleApiCall(
    dispatch,
    DELETE_POSTS_LOADING,
    DELETE_POSTS_SUCCESS,
    DELETE_POSTS_ERROR,
    NetworkRequest.deletePost,
    id
  );
};

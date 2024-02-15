import { handleApiCall } from "../utils/helpers";

import { getPostCommentCall, getUserPostCall } from "../utils/networkRequests";

import {
  GET_ALL_POSTS_LOADING,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_ERROR,
  GET_ALL_COMMENTS_LOADING,
} from "../constants/postsConstants";

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
    getUserPostCall,
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
    getPostCommentCall,
    id
  );
};

export const filterPosts = (dispatch, id, data) => {
  const newPosts = data.posts.filter((post) => post.id !== id);
  const newData = {
    ...data,
    posts: newPosts,
  };

  dispatch({
    type: "FILTER_POSTS",
    payload: newData,
  });
};

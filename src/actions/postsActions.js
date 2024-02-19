import { requestHandler } from "../utils/helpers";

import {
  GET_USER_POSTS,
  GET_ALL_COMMENTS,
  DELETE_POSTS,
} from "../constants/actionTypesPosts";

export const getUserPosts = async (dispatch, userId, handleAbortController) => {
  const abortController = new AbortController();
  handleAbortController(abortController);
  await requestHandler(dispatch, GET_USER_POSTS, userId, abortController);
};

export const getPostComments = async (dispatch, postId) => {
  await requestHandler(dispatch, GET_ALL_COMMENTS, postId);
};

export const deletePosts = async (dispatch, postId) => {
  await requestHandler(dispatch, DELETE_POSTS, postId);
};

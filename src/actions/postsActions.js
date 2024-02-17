import { handleApiCall } from "../utils/helpers";

import { NetworkRequest } from "../utils/networkRequests";

import {
  GET_ALL_POSTS,
  GET_ALL_COMMENTS,
  DELETE_POSTS,
} from "../constants/actionTypesPosts";

export const getUserPosts = async (dispatch, id, abortController, page = 1) => {
  await handleApiCall(
    dispatch,
    GET_ALL_POSTS,
    NetworkRequest.getUserPost,
    id,
    page,
    abortController
  );
};

export const getPostComments = async (dispatch, id) => {
  await handleApiCall(
    dispatch,
    GET_ALL_COMMENTS,
    NetworkRequest.getPostComment,
    id
  );
};

export const filterPosts = async (dispatch, id) => {
  await handleApiCall(dispatch, DELETE_POSTS, NetworkRequest.deletePost, id);
};

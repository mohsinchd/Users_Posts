import { requestHandler } from "../utils/helpers";

import {
  GET_ALL_POSTS,
  GET_ALL_COMMENTS,
  DELETE_POSTS,
} from "../constants/actionTypesPosts";

export const getUserPosts = async (dispatch, id, abortController, page = 1) => {
  await requestHandler(dispatch, GET_ALL_POSTS, id, page, abortController);
};

export const getPostComments = async (dispatch, id) => {
  await requestHandler(dispatch, GET_ALL_COMMENTS, id);
};

export const filterPosts = async (dispatch, id) => {
  await requestHandler(dispatch, DELETE_POSTS, id);
};

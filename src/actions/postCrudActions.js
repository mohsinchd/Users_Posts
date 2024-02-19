import {
  GET_ALL_POSTS,
  EDIT_POST,
  DELETE_POST,
  CREATE_POST,
} from "../constants/actionTypesPostCrud";

import { requestHandler } from "../utils/helpers";

export const createNewPost = async (dispatch, payload) => {
  await requestHandler(dispatch, CREATE_POST, payload);
};

export const deletePost = async (dispatch, postId) => {
  await requestHandler(dispatch, DELETE_POST, postId);
};

export const editPost = async (dispatch, postId, payload) => {
  await requestHandler(dispatch, EDIT_POST, postId, payload);
};

export const getPosts = async (dispatch, query, abort) => {
  await requestHandler(dispatch, GET_ALL_POSTS, query, abort);
};

import {
  GET_ALL_POSTS,
  EDIT_POST,
  DELETE_POST,
  CREATE_POST,
} from "../constants/actionTypesPostCrud";

import { requestHandler } from "../utils/helpers";

export const createNewPost = async (dispatch, newData) => {
  await requestHandler(dispatch, CREATE_POST, newData);
};

export const deletePost = async (dispatch, id) => {
  await requestHandler(dispatch, DELETE_POST, id);
};

export const editPost = async (dispatch, id, newData) => {
  await requestHandler(dispatch, EDIT_POST, id, newData);
};

export const getPosts = async (dispatch, query, abort) => {
  await requestHandler(dispatch, GET_ALL_POSTS, query, abort);
};

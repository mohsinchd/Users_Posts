import {
  GET_ALL_POSTS,
  EDIT_POST,
  DELETE_POST,
  CREATE_POST,
} from "../constants/actionTypesPostCrud";

import { NetworkRequest } from "../utils/networkRequests";

import { handleApiCall } from "../utils/helpers";

export const createNewPost = async (dispatch, newData) => {
  handleApiCall(dispatch, CREATE_POST, NetworkRequest.createNewPost, newData);
};

export const deletePost = async (dispatch, id) => {
  handleApiCall(dispatch, DELETE_POST, NetworkRequest.deletePost, id);
};

export const editPost = async (dispatch, id, newData) => {
  handleApiCall(dispatch, EDIT_POST, NetworkRequest.editPost, id, newData);
};

export const getPosts = async (dispatch, query, abort) => {
  handleApiCall(dispatch, GET_ALL_POSTS, NetworkRequest.getPosts, query, abort);
};

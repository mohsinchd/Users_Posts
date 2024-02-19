import { requestHandler } from "../utils/helpers";

import {
  GET_ALL_USER,
  EDIT_USER,
  DELETE_USER,
  CREATE_NEW_USER,
} from "../constants/actionTypesUsers";

export const getAllUsers = async (dispatch, query, handleAbortController) => {
  const abortController = new AbortController();
  handleAbortController(abortController);
  await requestHandler(dispatch, GET_ALL_USER, query, abortController);
};

export const createNewUser = async (dispatch, payload) => {
  await requestHandler(dispatch, CREATE_NEW_USER, payload);
};

export const editUser = async (dispatch, payload, userId) => {
  await requestHandler(dispatch, EDIT_USER, userId, payload);
};

export const deleteUser = async (dispatch, userId) => {
  await requestHandler(dispatch, DELETE_USER, userId);
};

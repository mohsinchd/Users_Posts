import { requestHandler } from "../utils/helpers";

import {
  GET_ALL_USER,
  EDIT_USER,
  DELETE_USER,
  CREATE_NEW_USER,
} from "../constants/actionTypesUsers";

export const getAllUsers = async (dispatch, query, abortController) => {
  await requestHandler(dispatch, GET_ALL_USER, query, abortController);
};

export const createNewUser = async (dispatch, newUser) => {
  await requestHandler(dispatch, CREATE_NEW_USER, newUser);
};

export const editUser = async (dispatch, newUser, id) => {
  await requestHandler(dispatch, EDIT_USER, id, newUser);
};

export const deleteUser = async (dispatch, id) => {
  await requestHandler(dispatch, DELETE_USER, id);
};

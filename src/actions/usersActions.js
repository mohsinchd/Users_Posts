import { handleApiCall } from "../utils/helpers";

import { NetworkRequest } from "../utils/networkRequests";

import {
  GET_ALL_USER,
  EDIT_USER,
  DELETE_USER,
  CREATE_NEW_USER,
} from "../constants/actionTypesUsers";

export const getAllUsers = async (dispatch, query, abortController) => {
  await handleApiCall(
    dispatch,
    GET_ALL_USER,
    NetworkRequest.getAllUsers,
    query,
    abortController
  );
};

export const createNewUser = async (dispatch, newUser) => {
  await handleApiCall(
    dispatch,
    CREATE_NEW_USER,
    NetworkRequest.createNewUser,
    newUser
  );
};

export const editUser = async (dispatch, newUser, id) => {
  await handleApiCall(
    dispatch,
    EDIT_USER,
    NetworkRequest.editUser,
    id,
    newUser
  );
};

export const deleteUser = async (dispatch, id) => {
  await handleApiCall(dispatch, DELETE_USER, NetworkRequest.deleteUser, id);
};

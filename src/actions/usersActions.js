import { handleApiCall } from "../utils/helpers";

import {
  createNewUserCall,
  editUserCall,
  getAllUsersCall,
} from "../utils/networkRequests";

import {
  GET_ALL_USERS_LOADING,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR,
  CREATE_NEW_USER_LOADING,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR,
  EDIT_USER_LOADING,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  FILTER_USER,
} from "../constants/usersConstants";

export const getAllUsers = async (dispatch, query, abortController) => {
  await handleApiCall(
    dispatch,
    GET_ALL_USERS_LOADING,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    getAllUsersCall,
    query,
    abortController
  );
};

export const createNewUser = async (dispatch, newUser) => {
  await handleApiCall(
    dispatch,
    CREATE_NEW_USER_LOADING,
    CREATE_NEW_USER_SUCCESS,
    CREATE_NEW_USER_ERROR,
    createNewUserCall,
    newUser
  );
};

export const editUser = async (dispatch, newUser, id) => {
  await handleApiCall(
    dispatch,
    EDIT_USER_LOADING,
    EDIT_USER_SUCCESS,
    EDIT_USER_ERROR,
    editUserCall,
    id,
    newUser
  );
};

export const deleteUser = async (dispatch, id) => {
  dispatch({
    type: FILTER_USER,
    payload: id,
  });
};

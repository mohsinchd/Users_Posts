import axios from "axios";
import { API_URL } from "../context/MainContexts";
import { errorHandler } from "../utils/errorHandler";

export const getAllUsers = async (dispatch, query, abortController) => {
  try {
    dispatch({
      type: "GET_ALL_USERS_LOADING",
    });
    const { data } = await axios.get(`${API_URL}/users?${query}`, {
      signal: abortController.signal,
    });
    dispatch({
      type: "GET_ALL_USERS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, "GET_ALL_USERS_ERROR");
  }
};

export const createNewUser = async (dispatch, newUser) => {
  try {
    dispatch({
      type: "CREATE_NEW_USER_LOADING",
    });

    const { data } = await axios.post(`${API_URL}/users`, newUser);

    dispatch({
      type: "CREATE_NEW_USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, "CREATE_NEW_USER_ERROR");
  }
};

export const editUser = async (dispatch, newUser, id) => {
  try {
    dispatch({
      type: "EDIT_USER_LOADING",
    });

    const { data } = await axios.put(`${API_URL}/users/${id}`, newUser);

    dispatch({
      type: "EDIT_USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, "EDIT_USER_ERROR");
  }
};

export const deleteUser = async (dispatch, id) => {
  dispatch({
    type: "FILTER_USER",
    payload: id,
  });
};

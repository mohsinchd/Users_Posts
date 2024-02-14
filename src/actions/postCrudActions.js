import axios from "axios";
import { API_URL } from "../context/MainContexts";
import { errorHandler } from "../utils/errorHandler";

export const createNewPost = async (dispatch, newData) => {
  try {
    dispatch({
      type: "CREATE_POST_LOADING",
    });

    const { data } = await axios.post(`${API_URL}/posts`, newData);

    dispatch({
      type: "CREATE_POST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, "CREATE_POST_ERROR");
  }
};

export const deletePost = async (dispatch, id) => {
  try {
    dispatch({
      type: "DELETE_POST_LOADING",
    });

    const { data } = await axios.delete(`${API_URL}/posts/${id}`);
    dispatch({
      type: "DELETE_POST_SUCCESS",
      payload: id,
    });
  } catch (error) {
    errorHandler(error, dispatch, "DELETE_POST_ERROR");
  }
};

export const editPost = async (dispatch, id, newData) => {
  try {
    dispatch({ type: "EDIT_POST_LOADING" });

    const { data } = await axios.put(`${API_URL}/posts/${id}`, newData);
    dispatch({
      type: "EDIT_POST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, "EDIT_POST_ERROR");
  }
};

export const getPosts = async (dispatch, query, abort) => {
  try {
    dispatch({
      type: "GET_ALL_POSTS_LOADING",
    });

    const { data } = await axios.get(`${API_URL}/posts?${query}`, {
      signal: abort.signal,
    });

    dispatch({
      type: "GET_ALL_POSTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, "GET_ALL_POSTS_ERROR");
  }
};

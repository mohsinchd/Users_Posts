import axios from "axios";
import { API_URL } from "../context/MainContexts";
import { errorHandler } from "../utils/errorHandler";

export const getUserPosts = async (
  dispatch,
  id,
  abortController,
  limit = 5,
  page = 1
) => {
  try {
    dispatch({
      type: "GET_ALL_POSTS_LOADING",
    });

    const { data } = await axios.get(
      `${API_URL}/users/${id}/posts?_page=${page}&_limit=${limit}`,
      {
        signal: abortController.signal,
      }
    );

    dispatch({
      type: "GET_ALL_POSTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, "GET_ALL_POSTS_ERROR");
  }
};

export const getPostComments = async (dispatch, id) => {
  try {
    dispatch({
      type: "GET_ALL_COMMENTS_LOADING",
    });

    const { data } = await axios.get(`${API_URL}/posts/${id}/comments`);

    dispatch({
      type: "GET_ALL_COMMENTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, "GET_ALL_COMMENTS_ERROR");
  }
};

export const filterPosts = (dispatch, id, data) => {
  const newPosts = data.posts.filter((post) => post.id !== id);
  const newData = {
    ...data,
    posts: newPosts,
  };

  dispatch({
    type: "FILTER_POSTS",
    payload: newData,
  });
};

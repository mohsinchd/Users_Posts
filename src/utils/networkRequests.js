import axios from "axios";

export const getAllUsersCall = async (API_URL, query, abortController) => {
  return await axios.get(`${API_URL}/users?${query}`, {
    signal: abortController.signal,
  });
};

export const createNewUserCall = async (API_URL, newUser) => {
  return await axios.post(`${API_URL}/users`, newUser);
};

export const editUserCall = async (API_URL, id, newUser) => {
  return await axios.put(`${API_URL}/users/${id}`, newUser);
};

export const getUserPostCall = async (
  API_URL,
  id,
  page,
  limit,
  abortController
) => {
  return await axios.get(`${API_URL}/users/${id}/posts`, {
    params: { _page: page, _limit: limit },
    signal: abortController.signal,
  });
};

export const getPostCommentCall = async (API_URL, id) => {
  return await axios.get(`${API_URL}/posts/${id}/comments`);
};

export const createNewPostCall = async (API_URL, newData) => {
  return await axios.post(`${API_URL}/posts`, newData);
};

export const deletePostCall = async (API_URL, id) => {
  return await axios.delete(`${API_URL}/posts/${id}`);
};

export const editPostCall = async (API_URL, id, newData) => {
  return await axios.put(`${API_URL}/posts/${id}`, newData);
};

export const getPostsCall = async (API_URL, query, abort) => {
  return await axios.get(`${API_URL}/posts?${query}`, {
    signal: abort.signal,
  });
};

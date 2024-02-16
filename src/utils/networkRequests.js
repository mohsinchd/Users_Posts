import axios from "axios";

export class NetworkRequest {
  static getAllUsers = async (API_URL, query, abortController) => {
    return await axios.get(`${API_URL}/users?${query}`, {
      signal: abortController.signal,
    });
  };

  static createNewUser = async (API_URL, newUser) => {
    return await axios.post(`${API_URL}/users`, newUser);
  };

  static editUser = async (API_URL, id, newUser) => {
    return await axios.put(`${API_URL}/users/${id}`, newUser);
  };

  static getUserPost = async (API_URL, id, page, limit, abortController) => {
    return await axios.get(`${API_URL}/users/${id}/posts`, {
      params: { _page: page, _limit: limit },
      signal: abortController.signal,
    });
  };

  static getPostComment = async (API_URL, id) => {
    return await axios.get(`${API_URL}/posts/${id}/comments`);
  };

  static createNewPost = async (API_URL, newData) => {
    return await axios.post(`${API_URL}/posts`, newData);
  };

  static deletePost = async (API_URL, id) => {
    return await axios.delete(`${API_URL}/posts/${id}`);
  };

  static editPost = async (API_URL, id, newData) => {
    return await axios.put(`${API_URL}/posts/${id}`, newData);
  };

  static getPosts = async (API_URL, query, abort) => {
    return await axios.get(`${API_URL}/posts?${query}`, {
      signal: abort.signal,
    });
  };

  static deleteUser = async (API_URL, id) => {
    return await axios.delete(`${API_URL}/users/${id}`);
  };

  static deletePost = async (API_URL, id) => {
    return await axios.delete(`${API_URL}/posts/${id}`);
  };
}

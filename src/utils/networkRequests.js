import axios from "axios";

export class NetworkRequest {
  static getAllUsers = (API_URL, query, abortController) =>
    axios.get(`${API_URL}/users`, {
      params: { q: query },
      signal: abortController.signal,
    });

  static createNewUser = (API_URL, newUser) =>
    axios.post(`${API_URL}/users`, newUser);

  static editUser = (API_URL, id, newUser) =>
    axios.put(`${API_URL}/users/${id}`, newUser);

  static getUserPost = (API_URL, id, abortController) =>
    axios.get(`${API_URL}/users/${id}/posts`, {
      signal: abortController.signal,
    });

  static getPostComment = (API_URL, id) =>
    axios.get(`${API_URL}/posts/${id}/comments`);

  static createNewPost = (API_URL, newData) =>
    axios.post(`${API_URL}/posts`, newData);

  static deletePost = (API_URL, id) => axios.delete(`${API_URL}/posts/${id}`);

  static editPost = (API_URL, id, newData) =>
    axios.put(`${API_URL}/posts/${id}`, newData);

  static getPosts = (API_URL, query, abort) =>
    axios.get(`${API_URL}/posts`, {
      params: { ...query },
      signal: abort.signal,
    });

  static deleteUser = (API_URL, id) => axios.delete(`${API_URL}/users/${id}`);

  static deletePost = (API_URL, id) => axios.delete(`${API_URL}/posts/${id}`);
}

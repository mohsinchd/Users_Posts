import { createContext } from "react";
export const API_URL = "https://jsonplaceholder.typicode.com";

export const initialUsersState = {
  isLoading: true,
  isError: false,
  error: "",
  users: [],
  user: {},
};
export const UsersContext = createContext();

export const initialPostsState = {
  isLoading: true,
  modalLoading: true,
  isError: false,
  error: "",
  posts: [],
  comments: [],
};
export const PostsContext = createContext();

export const initialPostCrud = {
  isLoading: true,
  isError: false,
  error: "",
  post: {},
  message: "",
  posts: [],
};
export const PostCrud = createContext();

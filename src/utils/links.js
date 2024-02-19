import { CREATE_POST, CREATE_USER, POSTS } from "../constants/routeConstants";

export const links = [
  {
    to: CREATE_POST,
    label: "Create Post",
  },
  {
    to: CREATE_USER,
    label: "Create User",
  },
  {
    to: POSTS,
    label: "All Posts",
  },
];

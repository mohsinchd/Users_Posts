import {
  HOME,
  POSTS,
  EDIT_POST,
  EDIT_USER,
  USER_POSTS,
  CREATE_POST,
  CREATE_USER,
} from "../constants/routeConstants";

import USER from "../context/user";
import POST from "../context/post";
import POSTCRUD from "../context/postCrud";

import Home from "../pages/home";
import UsersPosts from "../pages/usersPosts";
import Posts from "../pages/posts";
import PostsForm from "../pages/postsForm";
import UsersForm from "../pages/usersForm";

export const routes = [
  {
    path: HOME,
    element: (
      <USER>
        <Home />
      </USER>
    ),
  },
  {
    path: USER_POSTS,
    element: (
      <POST>
        <UsersPosts />
      </POST>
    ),
  },
  {
    path: POSTS,
    element: (
      <POSTCRUD>
        <POST>
          <Posts />
        </POST>
      </POSTCRUD>
    ),
  },
  {
    path: CREATE_POST,
    element: (
      <POSTCRUD>
        <POST>
          <PostsForm />
        </POST>
      </POSTCRUD>
    ),
  },
  {
    path: EDIT_POST,
    element: (
      <POSTCRUD>
        <POST>
          <PostsForm />
        </POST>
      </POSTCRUD>
    ),
  },
  {
    path: CREATE_USER,
    element: (
      <USER>
        <UsersForm />
      </USER>
    ),
  },
  {
    path: EDIT_USER,
    element: (
      <USER>
        <UsersForm />
      </USER>
    ),
  },
];

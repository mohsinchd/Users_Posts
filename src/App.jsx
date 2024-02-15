import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
import Navbar from "./components/shared/Navbar";

import AllPostsPage from "./pages/AllPostsPage";
import CreateEditPage from "./pages/CreateEditPostPage";
import CreateEditUserPage from "./pages/CreateEditUserPage";

import {
  HOME_PAGE,
  ALL_POSTS_PAGE,
  EDIT_POST_PAGE,
  EDIT_USER_PAGE,
  USER_POSTS_PAGE,
  CREATE_POST_PAGE,
  CREATE_USER_PAGE,
} from "./constants/routeConstants";

import UserContextWrapper from "./context/UserContextWrapper";
import PostsContextWrapper from "./context/PostContextWrapper";
import PostCrudContextWrapper from "./context/PostCrudContextWrapper";

const App = () => {
  return (
    <Router>
      <div className="container py-5">
        <Navbar />
        <Routes>
          <Route
            path={HOME_PAGE}
            element={
              <UserContextWrapper>
                <HomePage />
              </UserContextWrapper>
            }
          />
          <Route
            path={USER_POSTS_PAGE}
            element={
              <PostsContextWrapper>
                <Posts />
              </PostsContextWrapper>
            }
          />
          <Route
            path={ALL_POSTS_PAGE}
            element={
              <PostCrudContextWrapper>
                <PostsContextWrapper>
                  <AllPostsPage />
                </PostsContextWrapper>
              </PostCrudContextWrapper>
            }
          />
          <Route
            path={CREATE_POST_PAGE}
            element={
              <PostCrudContextWrapper>
                <PostsContextWrapper>
                  <CreateEditPage />
                </PostsContextWrapper>
              </PostCrudContextWrapper>
            }
          />
          <Route
            path={EDIT_POST_PAGE}
            element={
              <PostCrudContextWrapper>
                <PostsContextWrapper>
                  <CreateEditPage />
                </PostsContextWrapper>
              </PostCrudContextWrapper>
            }
          />
          <Route
            path={CREATE_USER_PAGE}
            element={
              <UserContextWrapper>
                <CreateEditUserPage />
              </UserContextWrapper>
            }
          />
          <Route
            path={EDIT_USER_PAGE}
            element={
              <UserContextWrapper>
                <CreateEditUserPage />
              </UserContextWrapper>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

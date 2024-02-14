import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
import Navbar from "./components/shared/Navbar";

import {
  PostCrud,
  PostsContext,
  UsersContext,
  initialPostCrud,
  initialPostsState,
  initialUsersState,
} from "./context/MainContexts";
import { postCrudReducer } from "./reducers/postCrudReducers";
import { postsReducer } from "./reducers/postsReducers";
import { usersReducer } from "./reducers/usersReducers";

import AllPostsPage from "./pages/AllPostsPage";
import CreateEditPage from "./pages/CreateEditPostPage";
import CreateEditUserPage from "./pages/CreateEditUserPage";

const App = () => {
  const [postCrudData, postCrudDispatch] = useReducer(
    postCrudReducer,
    initialPostCrud
  );
  const [data, dispatch] = useReducer(postsReducer, initialPostsState);
  const [usersData, usersDispatch] = useReducer(
    usersReducer,
    initialUsersState
  );

  return (
    <Router>
      <UsersContext.Provider
        value={{
          data: usersData,
          dispatch: usersDispatch,
        }}
      >
        <PostCrud.Provider
          value={{
            data: postCrudData,
            dispatch: postCrudDispatch,
          }}
        >
          <PostsContext.Provider
            value={{
              data,
              dispatch,
            }}
          >
            <div className="container py-5">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/:id" element={<Posts />} />
                <Route path="/posts" element={<AllPostsPage />} />
                <Route path="/create" element={<CreateEditPage />} />
                <Route path="/edit/:id" element={<CreateEditPage />} />
                <Route path="/createUser" element={<CreateEditUserPage />} />
                <Route path="/editUser/:id" element={<CreateEditUserPage />} />
              </Routes>
            </div>
          </PostsContext.Provider>
        </PostCrud.Provider>
      </UsersContext.Provider>
    </Router>
  );
};

export default App;

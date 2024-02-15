import React, { useReducer } from "react";
import { postsReducer } from "../reducers/postsReducers";
import { initialPostsState } from "../context/MainContexts";

import { PostsContext } from "../context/MainContexts";

const PostsContextWrapper = ({ children }) => {
  const [data, dispatch] = useReducer(postsReducer, initialPostsState);

  return (
    <PostsContext.Provider
      value={{
        data,
        dispatch,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextWrapper;

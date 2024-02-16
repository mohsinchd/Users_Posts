import React, { useReducer } from "react";
import { postsReducer } from "../reducers/postsReducers";
import { initialPostsState } from "./mainContexts";

import { PostsContext } from "./mainContexts";

const POST = ({ children }) => {
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

export default POST;

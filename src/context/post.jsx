import React, { useReducer } from "react";
import { postsReducer } from "../reducers/postsReducers";
import { DataHelpers } from "../helpers/dataHelpers";

import { PostsContext } from "./mainContexts";

const POST = ({ children }) => {
  const [data, dispatch] = useReducer(
    postsReducer,
    DataHelpers.initialPostsState()
  );

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

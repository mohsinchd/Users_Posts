import React, { useReducer } from "react";
import { postCrudReducer } from "../reducers/postCrudReducers";
import { initialPostCrud } from "./MainContexts";
import { PostCrud } from "./MainContexts";

const PostCrudContextWrapper = ({ children }) => {
  const [postCrudData, postCrudDispatch] = useReducer(
    postCrudReducer,
    initialPostCrud
  );
  return (
    <PostCrud.Provider
      value={{
        data: postCrudData,
        dispatch: postCrudDispatch,
      }}
    >
      {children}
    </PostCrud.Provider>
  );
};

export default PostCrudContextWrapper;

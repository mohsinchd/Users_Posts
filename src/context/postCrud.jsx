import React, { useReducer } from "react";
import { postCrudReducer } from "../reducers/postCrudReducers";
import { initialPostCrud } from "./mainContexts";
import { PostCrud } from "./mainContexts";

const POSTCRUD = ({ children }) => {
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

export default POSTCRUD;

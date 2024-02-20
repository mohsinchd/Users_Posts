import React, { useReducer } from "react";
import { postCrudReducer } from "../reducers/postCrudReducers";
import { DataHelpers } from "../helpers/dataHelpers";
import { PostCrud } from "./mainContexts";

const POSTCRUD = ({ children }) => {
  const [postCrudData, postCrudDispatch] = useReducer(
    postCrudReducer,
    DataHelpers.initialPostCrudData()
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

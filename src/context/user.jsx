import React, { useReducer } from "react";
import { usersReducer } from "../reducers/usersReducers";
import { initialUsersState } from "./mainContexts";

import { UsersContext } from "./mainContexts";

const USER = ({ children }) => {
  const [usersData, usersDispatch] = useReducer(
    usersReducer,
    initialUsersState
  );

  return (
    <UsersContext.Provider
      value={{
        data: usersData,
        dispatch: usersDispatch,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default USER;

import React, { useReducer } from "react";
import { usersReducer } from "../reducers/usersReducers";
import { initialUsersState } from "../context/MainContexts";

import { UsersContext } from "../context/MainContexts";

const UserContextWrapper = ({ children }) => {
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

export default UserContextWrapper;

import React, { useContext, useEffect } from "react";
import { UsersContext } from "../../context/MainContexts";
import { getAllUsers } from "../../actions/usersActions";
import UsersTable from "./UsersTable";
import GlobalFilter from "../shared/GlobalFilter";
import { useSearchParams } from "react-router-dom";

const UserTable = () => {
  const { data, dispatch } = useContext(UsersContext);

  const [searchParams, setSearchParams] = useSearchParams({ q: "" });

  const { isLoading, isError, error, users } = data;

  const usersData = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      deleteId: user.id,
      editId: user.id,
    };
  });

  useEffect(() => {
    const abortController = new AbortController();

    const query = `_page=${searchParams.get("_page")}&q=${searchParams.get(
      "q"
    )}`;

    getAllUsers(dispatch, query, abortController);

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

  return (
    <>
      <h1>Users</h1>
      <div className="d-flex justify-content-end">
        <GlobalFilter setSearchParams={setSearchParams} />
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{error}</h2>
      ) : (
        <>
          <UsersTable usersData={usersData} />
        </>
      )}
    </>
  );
};

export default UserTable;

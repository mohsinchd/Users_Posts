import React, { useContext, useEffect } from "react";
import axios from "axios";

import { UsersContext } from "../../context/mainContexts";
import { getAllUsers } from "../../actions/usersActions";
import UsersTable from "./usersTable";
import UsersFilter from "../shared/usersFilter";
import { useSearchParams } from "react-router-dom";
import Loading from "../shared/loading";

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

  function fetchUsers(abortController) {
    const query = `q=${searchParams.get("q")}`;

    getAllUsers(dispatch, query, abortController);
  }

  useEffect(() => {
    const abortController = new AbortController();

    fetchUsers(abortController);

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

  if (isError) return <h2>{error}</h2>;

  return (
    <>
      <h1>Users</h1>
      <div className="d-flex justify-content-end">
        <UsersFilter setSearchParams={setSearchParams} />
      </div>
      <Loading isLoading={isLoading}>
        <UsersTable usersData={usersData} />
      </Loading>
    </>
  );
};

export default UserTable;

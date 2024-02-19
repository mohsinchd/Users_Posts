import React, { useContext, useEffect } from "react";

import { UsersContext } from "../context/mainContexts";
import { getAllUsers } from "../actions/usersActions";
import UsersTable from "../components/users/usersTable";
import UsersFilter from "../components/shared/usersFilter";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/shared/loading";

const Home = () => {
  const {
    data: { isLoading, isError, error, users },
    dispatch,
  } = useContext(UsersContext);

  const [searchParams, setSearchParams] = useSearchParams({ q: "" });

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
    let abort;

    async function fetchUsers() {
      const query = `${searchParams.get("q")}`;
      getAllUsers(dispatch, query, (abortController) => {
        abort = abortController;
      });
    }

    fetchUsers();

    return () => {
      if (abort) {
        abort.abort();
      }
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

export default Home;

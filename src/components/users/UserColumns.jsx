import { Link } from "react-router-dom";
import { deleteUser } from "../../actions/usersActions";
import { useContext } from "react";
import { UsersContext } from "../../context/MainContexts";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Username",
    accessor: "username",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Website",
    accessor: "website",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "",
    accessor: "id",
    Cell: ({ value }) => {
      return (
        <Link to={`posts/${value}`}>
          <button className="btn btn-success btn-sm">View Posts</button>
        </Link>
      );
    },
  },
  {
    Header: "",
    accessor: "editId",
    Cell: ({ value }) => {
      return (
        <Link to={`editUser/${value}`}>
          <button className="btn btn-warning btn-sm">Edit User</button>
        </Link>
      );
    },
  },
  {
    Header: "",
    accessor: "deleteId",
    Cell: ({ value }) => {
      const { dispatch } = useContext(UsersContext);
      return (
        <button
          onClick={() => deleteUser(dispatch, value)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      );
    },
  },
];

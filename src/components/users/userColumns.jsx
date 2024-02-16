import { Link, generatePath } from "react-router-dom";
import { deleteUser } from "../../actions/usersActions";
import { useContext } from "react";
import { UsersContext } from "../../context/mainContexts";
import { EDIT_USER, POSTS } from "../../constants/routeConstants";
import CustomButton from "../shared/customButton";

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
        <Link to={generatePath(POSTS, { id: value })}>
          <CustomButton className="btn btn-success btn-sm" label="View Posts" />
        </Link>
      );
    },
  },
  {
    Header: "",
    accessor: "editId",
    Cell: ({ value }) => {
      return (
        <Link to={generatePath(EDIT_USER, { id: value })}>
          <CustomButton className="btn btn-warning btn-sm" label="Edit User" />
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

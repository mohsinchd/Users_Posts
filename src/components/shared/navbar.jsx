import React from "react";
import { Link } from "react-router-dom";
import {
  CREATE_POST,
  CREATE_USER,
  POSTS,
} from "../../constants/routeConstants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to={CREATE_POST}>Create Post</Link>
      </div>
      <div>
        <Link to={POSTS}>All Posts</Link>
      </div>
      <div>
        <Link to={CREATE_USER}>Create User</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/create">Create Post</Link>
      </div>
      <div>
        <Link to="/posts">All Posts</Link>
      </div>
      <div>
        <Link to="/createUser">Create User</Link>
      </div>
    </nav>
  );
};

export default Navbar;

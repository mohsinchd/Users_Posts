import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../utils/links";

const Navbar = () => {
  return (
    <nav>
      {links.map(({ path, label }) => (
        <div key={path}>
          <Link to={path}>{label}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;

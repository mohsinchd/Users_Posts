import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../utils/links";

const Navbar = () => {
  return (
    <nav>
      {links.map(({ to, label }) => (
        <div key={to}>
          <Link to={to}>{label}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;

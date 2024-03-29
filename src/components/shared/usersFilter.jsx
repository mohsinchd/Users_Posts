import React from "react";
import { debounce } from "lodash";

const UsersFilter = ({ setSearchParams }) => {
  const handleSearchChange = debounce((e) => {
    setSearchParams({
      q: e.target.value,
    });
  }, 600);

  return (
    <span className="mb-3">
      Filter:
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search"
        style={{ width: "300px" }}
        onChange={handleSearchChange}
      />
    </span>
  );
};

export default UsersFilter;

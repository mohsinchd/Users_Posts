import React from "react";
import { debounce } from "lodash";

const GlobalFilter = ({ setSearchParams }) => {
  const handleChange = debounce((e) => {
    setSearchParams({
      q: e.target.value,
    });
    // getAllUsers(dispatch, e.target.value, abortController);
  }, 600);

  return (
    <>
      <span className="mb-3">
        Filter:
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search"
          style={{ width: "300px" }}
          onChange={handleChange}
        />
      </span>
    </>
  );
};

export default GlobalFilter;

import React, { useState } from "react";

import { debounce } from "lodash";

const PostsFilter = ({ setSearchParams, searchParams }) => {
  const [search, setSearch] = useState(searchParams.get("q"));

  const handleSearchChange = (e) => {
    debounce((e) => {
      setSearchParams({
        _page: 1,
        q: e.target.value,
      });
    }, 1000)(e);
    setSearch(e.target.value);
  };

  return (
    <span className="mb-3">
      Filter:
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search"
        style={{ width: "300px" }}
        onChange={handleSearchChange}
        value={search}
      />
    </span>
  );
};

export default PostsFilter;

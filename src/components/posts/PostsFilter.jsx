import React, { useState } from "react";

import { debounce } from "lodash";

const PostsFilter = ({ setSearchParams, searchParams }) => {
  const [value, setValue] = useState(searchParams.get("q"));

  const handleChange = debounce((e) => {
    setSearchParams({
      _page: 1,
      q: e.target.value,
    });
    // getPosts(dispatch, 1, e.target.value, abort);
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
          onChange={(e) => {
            handleChange(e);
            setValue(e.target.value);
          }}
          value={value}
        />
      </span>
    </>
  );
};

export default PostsFilter;

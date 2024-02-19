import React from "react";

const Loading = ({ isLoading, children }) => {
  return isLoading ? <h2>Loading</h2> : children;
};

export default Loading;

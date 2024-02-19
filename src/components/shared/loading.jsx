import React from "react";

const Loading = ({ isLoading, modalLoading, children }) => {
  return modalLoading ? null : isLoading ? <h2>Loading</h2> : children;
};

export default Loading;

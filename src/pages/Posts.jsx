import React from "react";
import { useParams } from "react-router-dom";

import PostsMain from "../components/posts/PostsMain";

const Posts = () => {
  const { id } = useParams();

  return (
    <>
      <PostsMain id={id} />
    </>
  );
};

export default Posts;

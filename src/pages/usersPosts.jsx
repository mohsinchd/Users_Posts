import React from "react";
import { useParams } from "react-router-dom";

import PostsMain from "../components/posts/postMain";

const UsersPosts = () => {
  const { id } = useParams();

  return <PostsMain id={id} />;
};

export default UsersPosts;

import React, { useContext } from "react";
import { PostCrud } from "../../context/MainContexts";

const NewPostsList = () => {
  const { data } = useContext(PostCrud);

  return (
    <div>
      {data.isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>New Post</h2>
          <h3>Title: {data.post.title}</h3>
          <h3>Body: {data.post.body}</h3>
        </>
      )}
    </div>
  );
};

export default NewPostsList;

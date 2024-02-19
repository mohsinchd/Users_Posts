import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../components/posts/postForm";
import { PostCrud, PostsContext } from "../context/mainContexts";
import { createNewPost, editPost } from "../actions/postCrudActions";

const PostsForm = () => {
  const { id } = useParams();
  const { data, postsDispatch } = useContext(PostsContext);
  const { dispatch } = useContext(PostCrud);

  const onSubmit = (values) => {
    id
      ? editPost(dispatch, id, values)
      : createNewPost(dispatch, values, data, postsDispatch);
  };

  return (
    <>
      <h1>{id ? "Edit Post" : "Create Post"}</h1>
      {id ? (
        <PostForm
          initialValues={{ title: "", body: "" }}
          buttonTitle={"Edit Post"}
          onSubmit={onSubmit}
        />
      ) : (
        <PostForm
          initialValues={{ title: "", body: "" }}
          buttonTitle={"Create Post"}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default PostsForm;

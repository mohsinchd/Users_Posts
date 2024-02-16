import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../components/posts/postForm";
import { PostCrud, PostsContext } from "../context/mainContexts";
import { createNewPost, editPost } from "../actions/postCrudActions";

const PostsForm = () => {
  const { id } = useParams();
  const { data, postsDispatch } = useContext(PostsContext);
  const { dispatch } = useContext(PostCrud);

  const handleCreate = (values) => {
    createNewPost(dispatch, values, data, postsDispatch);
  };

  const handleEdit = (values) => {
    editPost(dispatch, id, values);
  };

  return (
    <>
      <h1>{id ? "Edit Post" : "Create Post"}</h1>
      {id ? (
        <PostForm
          initialValues={{ title: "", body: "" }}
          buttonTitle={"Edit Post"}
          handleEdit={handleEdit}
          isEditForm={true}
        />
      ) : (
        <PostForm
          initialValues={{ title: "", body: "" }}
          buttonTitle={"Create Post"}
          handleCreate={handleCreate}
          isEditForm={false}
        />
      )}
    </>
  );
};

export default PostsForm;

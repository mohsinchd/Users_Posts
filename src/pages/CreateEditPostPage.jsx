import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../components/posts/PostForm";
import { PostCrud, PostsContext } from "../context/MainContexts";
import { createNewPost, editPost } from "../actions/postCrudActions";

const CreateEditPage = () => {
  const { id } = useParams();
  const { data, postsDispatch } = useContext(PostsContext);
  const { dispatch, data: crudData } = useContext(PostCrud);
  const post =
    data.posts.length > 0
      ? data.posts.find((post) => String(post.id) === String(id))
      : crudData.posts.find((post) => String(post.id) === String(id));

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
          initialData={{ title: post.title, body: post.body }}
          buttonTitle={"Edit Post"}
          handleEdit={handleEdit}
          checkEdit={true}
        />
      ) : (
        <PostForm
          initialData={{ title: "", body: "" }}
          buttonTitle={"Create Post"}
          handleCreate={handleCreate}
          checkEdit={false}
        />
      )}
    </>
  );
};

export default CreateEditPage;

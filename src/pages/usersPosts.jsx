import React, { useEffect, useContext } from "react";
import { PostsContext } from "../context/mainContexts";
import { getUserPosts } from "../actions/postsActions";
import PostCard from "../components/posts/postCard";
import Loading from "../components/shared/loading";
import { useParams } from "react-router-dom";

const UsersPosts = () => {
  const { id: postId } = useParams();

  const {
    data: { isLoading, isError, error, posts },
    dispatch,
  } = useContext(PostsContext);

  function fetchUsersPosts() {
    let abort;
    getUserPosts(dispatch, postId, (abortController) => {
      abort = abortController;
    });
    return abort;
  }

  useEffect(() => {
    const abort = fetchUsersPosts();
    return () => {
      if (abort) abort.abort();
    };
  }, []);

  if (isError) return <h2>{error}</h2>;

  return (
    <Loading isLoading={isLoading}>
      <h1>Posts</h1>
      {posts.map((post) => {
        return post.id ? (
          <PostCard key={post.id} post={post} postId={post.id} />
        ) : null;
      })}
    </Loading>
  );
};

export default UsersPosts;

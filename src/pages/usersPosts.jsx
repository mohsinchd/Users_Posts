import React, { useEffect, useContext } from "react";
import { PostsContext } from "../context/mainContexts";
import { getUserPosts } from "../actions/postsActions";
import PostCard from "../components/posts/postCard";
import Pagination from "../components/shared/pagination";
import Loading from "../components/shared/loading";
import { useParams } from "react-router-dom";

const UsersPosts = () => {
  const { id: postId } = useParams();

  const { data, dispatch } = useContext(PostsContext);
  const { isLoading, isError, error, posts } = data;

  const nextPage = (page) => {
    const abortController = new AbortController();
    getUserPosts(dispatch, postId, abortController, page);
  };

  function fetchAllPosts(abortController) {
    getUserPosts(dispatch, postId, abortController);
  }

  useEffect(() => {
    const abortController = new AbortController();

    fetchAllPosts(abortController);

    return () => {
      abortController.abort();
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
      <Pagination totalPosts={10} postPerPage={5} nextPage={nextPage} />
    </Loading>
  );
};

export default UsersPosts;

import React, { useEffect, useContext } from "react";
import { PostsContext } from "../../context/mainContexts";
import { getUserPosts } from "../../actions/postsActions";
import PostCard from "./postCard";
import Pagination from "../shared/pagination";
import Loading from "../shared/loading";

const PostsMain = ({ id }) => {
  const { data, dispatch } = useContext(PostsContext);
  const { isLoading, isError, error, posts } = data;

  const nextPage = (page) => {
    const abortController = new AbortController();
    getUserPosts(dispatch, id, abortController, page);
  };

  function fetchAllPosts(abortController) {
    getUserPosts(dispatch, id, abortController);
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
      <>
        <h1>Posts</h1>
        {posts.map((post) => {
          return post.id ? (
            <PostCard key={post.id} post={post} id={post.id} />
          ) : null;
        })}
        <Pagination totalPosts={10} postPerPage={5} nextPage={nextPage} />
      </>
    </Loading>
  );
};

export default PostsMain;

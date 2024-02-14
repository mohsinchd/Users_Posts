import React, { useEffect, useContext, useState } from "react";
import { PostsContext } from "../../context/MainContexts";
import { getUserPosts } from "../../actions/postsActions";
import PostCard from "./PostCard";
import Pagination from "../shared/Pagination";

const PostsMain = ({ id }) => {
  const [limit, setLimit] = useState(5);
  const { data, dispatch } = useContext(PostsContext);
  const { isLoading, isError, error, posts } = data;

  const nextPage = (page) => {
    const abortController = new AbortController();
    getUserPosts(dispatch, id, abortController, limit, page);
  };

  useEffect(() => {
    const abortController = new AbortController();
    getUserPosts(dispatch, id, abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : isError ? (
    <h2>{error}</h2>
  ) : (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        return post.id ? (
          <PostCard key={post.id} post={post} id={post.id} />
        ) : null;
      })}
      <Pagination totalPosts={10} postPerPage={limit} nextPage={nextPage} />
      <label htmlFor="limit">Limit Per Page</label>
      <input
        type="number"
        className="form-control"
        onChange={(e) => setLimit(Number(e.target.value))}
        min={1}
        max={10}
        value={limit}
        style={{
          width: 100,
        }}
      />
    </>
  );
};

export default PostsMain;

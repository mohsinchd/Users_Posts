import React, { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { getPosts } from "../actions/postCrudActions";
import { PostCrud } from "../context/MainContexts";
import PostCard from "../components/posts/PostCard";
import PostsFilter from "../components/posts/PostsFilter";
import Pagination from "../components/shared/Pagination";

const AllPostsPage = () => {
  const { dispatch, data } = useContext(PostCrud);
  const [searchParams, setSearchParams] = useSearchParams({ _page: 1, q: "" });

  const { isLoading, posts } = data;

  const nextPage = (newPage) => {
    setSearchParams({
      _page: newPage,
      q: searchParams.get("q"),
    });

    console.log(searchParams.get("_page"), searchParams.get("q"));
  };

  useEffect(() => {
    const abort = new AbortController();
    const query = `_page=${searchParams.get("_page")}&q=${searchParams.get(
      "q"
    )}`;

    getPosts(dispatch, query, abort);

    return () => {
      abort.abort();
    };
  }, [searchParams]);

  return (
    <>
      <div className="d-flex justify-content-end">
        <PostsFilter
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {posts.length > 0 && (
            <>
              {posts.map((post) => {
                return post.id ? (
                  <PostCard key={post.id} post={post} id={post.id} />
                ) : null;
              })}
              {!searchParams.get("q") && (
                <Pagination
                  postPerPage={10}
                  nextPage={nextPage}
                  totalPosts={100}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default AllPostsPage;

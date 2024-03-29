import React, { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { getPosts } from "../actions/postCrudActions";
import { PostCrud } from "../context/mainContexts";
import PostCard from "../components/posts/postCard";
import PostsFilter from "../components/posts/postFilter";
import Pagination from "../components/shared/pagination";
import Loading from "../components/shared/loading";

const Posts = () => {
  const {
    dispatch,
    data: { isLoading, posts },
  } = useContext(PostCrud);
  const [searchParams, setSearchParams] = useSearchParams({ _page: 1, q: "" });

  const nextPage = (newPage) => {
    setSearchParams({
      _page: newPage,
      q: searchParams.get("q"),
    });
  };

  function fetchPosts() {
    const query = {
      _page: searchParams.get("_page"),
      q: searchParams.get("q"),
    };

    let abort;
    getPosts(dispatch, query, (abortController) => {
      abort = abortController;
    });
    return abort;
  }

  useEffect(() => {
    const abort = fetchPosts();
    return () => {
      if (abort) abort.abort();
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

      <Loading isLoading={isLoading}>
        {posts.length > 0 && (
          <>
            {posts.map((post) => {
              return post.id ? (
                <PostCard
                  isAllPosts={true}
                  key={post.id}
                  post={post}
                  postId={post.id}
                />
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
      </Loading>
    </>
  );
};

export default Posts;

import React, { useContext, useState } from "react";
import CommentsModal from "./commentsModal";
import { PostsContext } from "../../context/mainContexts";
import { Link, generatePath } from "react-router-dom";
import { deletePosts } from "../../actions/postsActions";
import { EDIT_POST } from "../../constants/routeConstants";

const PostCard = ({ post, postId }) => {
  const [modalShow, setModalShow] = useState(false);
  const { dispatch } = useContext(PostsContext);

  const deleteHandler = () => {
    deletePosts(dispatch, postId);
  };

  return (
    <>
      <div className="card card-body mb-3">
        <h3>
          {post.title} - {postId}
        </h3>
        <p className="text-lead">{post.body}</p>
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => setModalShow(true)}
          >
            View Comments
          </button>
          <button className="ms-2 btn btn-danger" onClick={deleteHandler}>
            Delete Post
          </button>
          <button className="ms-2 btn btn-dark">
            <Link
              to={generatePath(EDIT_POST, { id: postId })}
              className="nav-link"
            >
              Edit Post
            </Link>
          </button>
        </div>
      </div>
      <div>
        <CommentsModal
          postId={post.id}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default PostCard;

import React, { useContext, useState } from "react";
import CommentsModal from "./commentsModal";
import { PostsContext } from "../../context/mainContexts";
import { Link, generatePath } from "react-router-dom";
import { filterPosts } from "../../actions/postsActions";
import { EDIT_POST } from "../../constants/routeConstants";

const PostCard = ({ post, id }) => {
  const [modalShow, setModalShow] = useState(false);
  const { dispatch } = useContext(PostsContext);

  const deleteHandler = () => {
    filterPosts(dispatch, id);
  };

  return (
    <>
      <div className="card card-body mb-3">
        <h3>
          {post.title} - {id}
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
            <Link to={generatePath(EDIT_POST, { id })} className="nav-link">
              Edit Post
            </Link>
          </button>
        </div>
      </div>
      <div>
        <CommentsModal
          id={post.id}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default PostCard;

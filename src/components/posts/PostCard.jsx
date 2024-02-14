import React, { useContext } from "react";
import CommentsModal from "./CommentsModal";
import { deletePost } from "../../actions/postCrudActions";
import { PostCrud, PostsContext } from "../../context/MainContexts";
import { Link } from "react-router-dom";
import { filterPosts } from "../../actions/postsActions";

const PostCard = ({ post, id }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { dispatch } = useContext(PostCrud);
  const { data, dispatch: postsDispatch } = useContext(PostsContext);

  const deleteHandler = () => {
    deletePost(dispatch, id);
    filterPosts(postsDispatch, id, data);
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
            <Link to={`/edit/${id}`} className="nav-link">
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

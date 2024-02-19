import React, { useEffect, useContext } from "react";
import { PostsContext } from "../../context/mainContexts";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Loading from "../shared/loading";
import { getPostComments } from "../../actions/postsActions";

const CommentsModal = ({ postId, show, onHide }) => {
  const {
    dispatch,
    data: { isLoading, comments },
  } = useContext(PostsContext);

  useEffect(() => {
    show && getPostComments(dispatch, postId);
  }, [show]);

  return (
    <Loading isLoading={isLoading}>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Comments</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {comments.map((comment) => (
            <p key={comment.id}>{comment.body}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Loading>
  );
};

export default CommentsModal;

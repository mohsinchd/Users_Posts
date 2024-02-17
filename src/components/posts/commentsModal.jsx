import React, { useEffect, useContext } from "react";
import { PostsContext } from "../../context/mainContexts";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { getPostComments } from "../../actions/postsActions";

const CommentsModal = ({ id, show, onHide }) => {
  const { dispatch, data } = useContext(PostsContext);

  const { modalLoading, comments } = data;

  useEffect(() => {
    show && getPostComments(dispatch, id);
  }, [show]);

  return modalLoading ? null : (
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
  );
};

export default CommentsModal;

import React, { useEffect, useContext } from "react";
import { PostsContext } from "../../context/MainContexts";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { getPostComments } from "../../actions/postsActions";

const CommentsModal = (props) => {
  const { dispatch, data } = useContext(PostsContext);

  const { modalLoading, comments } = data;

  useEffect(() => {
    if (props.show) {
      getPostComments(dispatch, props.id);
    }
  }, [props.show]);

  return modalLoading ? null : (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Comments</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <>
          {comments.map((comment) => (
            <p key={comment.id}>{comment.body}</p>
          ))}
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentsModal;

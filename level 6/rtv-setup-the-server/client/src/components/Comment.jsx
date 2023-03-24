import React, { useContext } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { CommentContext } from '../context/CommentProvider';
import "../styles/issue.css"

function Comment(props) {

  const { comment, _id, issueId, user } = props

  function handleDelete() {
    deleteComment(issueId, _id);
  }

  const {
    deleteComment
  } = useContext(CommentContext)

  return (
    <div className="comment">
      <p>{comment}</p>
       <Dropdown
       drop="start">
      <Dropdown.Toggle 
        variant="success" 
        id="dropdown-basic"
        className="text-dark bg-transparent border-0"
        >
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Comment;
import React, { useContext } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { CommentContext } from '../../context/CommentProvider';
import { UserContext } from '../../context/UserProvider'
import "./comment.css"

function Comment(props) {


  const { comment, _id, issueId, user, createdAt } = props

  const firstLetter = user ? user.username.charAt(0).toUpperCase() : '';
  const usernameCased = user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase();

  const {
    deleteComment
  } = useContext(CommentContext)
  
  function handleDelete() {
    deleteComment(issueId, _id);
  }
  // Calculate the time elapsed since the issue was posted
  const ONE_MINUTE = 60;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;
  let timeElapsedStr = "";
  const timeElapsed = Math.floor((Date.now() - new Date(createdAt)) / 1000); // in seconds

  if (timeElapsed < ONE_MINUTE) {
    timeElapsedStr = `${timeElapsed} seconds ago`;
  } else if (timeElapsed < ONE_HOUR) {
    const minutes = Math.floor(timeElapsed / ONE_MINUTE);
    timeElapsedStr = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeElapsed < ONE_DAY) {
    const hours = Math.floor(timeElapsed / ONE_HOUR);
    timeElapsedStr = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(timeElapsed / ONE_DAY);
    timeElapsedStr = `${days} day${days > 1 ? "s" : ""} ago`;
  }

  const { token } = useContext(UserContext);

  return (
    <div className="comment-container">
      <div className="profile-pic">{firstLetter}</div>
      <div className="comment-layout">
        <div className="comment">
          <div className="comment-content">
            <h3>{usernameCased}</h3>
            <p>{comment}</p>
          </div>
          {token && (
            <Dropdown drop="start">
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
          )}
        </div>
        <div className="comment-btns">
          <button>Like</button>
          <button>Reply</button>
          <p>{timeElapsedStr}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
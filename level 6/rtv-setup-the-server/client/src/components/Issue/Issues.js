import React, { useState, useContext } from 'react';
import Issue from './Issue';
import Comments from '../Comment/Comments'
import CommentForm from '../Comment/CommentForm';
import { CommentContext } from '../../context/CommentProvider';
import "./issue.css"

export default function Issues({issues}) {

  const {
    comments
  } = useContext(CommentContext)

  const [showComments, setShowComments] = useState(false);

  const handleShow = () => {
    setShowComments(prevState => !prevState)
  }

  return (
    <div className="issue-list">
      {issues.map(issue => (
        <div className="comment-section" key={issue._id}>
          <Issue {...issue} />
          <div className="comment-btn-wrapper">
          <button>
          <span><i className="fa-regular fa-thumbs-up"></i> Like</span>
          </button>
          <button onClick={handleShow}>
            {showComments ?  <span><i className="fa-regular fa-comment"></i> Comment </span> : <span><i className="fa-regular fa-comment"></i> Comments</span>}
          </button>
          </div>
              <CommentForm issueId={issue._id} username={issue.user.username} />
              {showComments && <Comments issueId={issue._id} comments={comments} />}
        </div>
      ))}
    </div>
  );
}

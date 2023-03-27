import React, { useState, useContext, useEffect } from 'react'
import PublicIssue from './PublicIssue';
import { CommentContext } from "../../context/CommentProvider";
import CommentForm from '../Comment/CommentForm';
import Comments from '../Comment/Comments';

const PublicIssues = ({ publicIssues }) => {

  const { getComments, comments  } = useContext(CommentContext);

  const [currentIssueId, setCurrentIssueId] = useState(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (currentIssueId) {
      getComments(currentIssueId);
      setShowComments(true);
    } else {
      setShowComments(false);
    }
  }, [currentIssueId]);

  return (
    <div className="AllIssuesList">
      {publicIssues.map(issue => (
        <div className="comment-section" key={issue._id}>
          <PublicIssue {...issue} />
          <div className="comment-btn-wrapper">
            <button>
              <span><i className="fa-regular fa-thumbs-up"></i> Like</span>
            </button>
            <button onClick={() => setCurrentIssueId(currentIssueId === issue._id ? null : issue._id)}>
              {currentIssueId === issue._id ? <span><i className="fa-regular fa-comment"></i> Comments {comments.length}</span> : <span><i className="fa-regular fa-comment"></i> Comment</span>}
            </button>
          </div>
          {currentIssueId === issue._id && (
            <>
              <CommentForm issueId={issue._id} />
              {showComments && <Comments comments={comments} issueId={issue._id} />}
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default PublicIssues
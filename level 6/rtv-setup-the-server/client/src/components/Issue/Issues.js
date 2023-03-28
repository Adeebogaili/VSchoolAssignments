import React, { useState, useContext, useEffect } from 'react';
import Issue from './Issue';
import Comments from '../Comment/Comments'
import CommentForm from '../Comment/CommentForm';
import { CommentContext } from '../../context/CommentProvider';
import { IssuesContext } from '../../context/IssuesProvider';
import "./issue.css"

export default function Issues({userId}) {

  const { 
    comments, 
    getComments
  } = useContext(CommentContext)

  const {
    getUserIssues,
    issues
  } = useContext(IssuesContext)

  const [currentIssueId, setCurrentIssueId] = useState(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getUserIssues(userId);
      if (currentIssueId) {
        getComments(currentIssueId);
        setShowComments(true);
      } else {
        setShowComments(false);
      }
    };
    fetchData();
  }, [userId, currentIssueId,]);
  

  return (
    <div className="issue-list">
      {issues.map(issue => (
        <div className="comment-section" key={issue._id}>
          <Issue {...issue} />
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
  );
}

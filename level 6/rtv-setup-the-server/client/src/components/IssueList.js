import React, { useContext, useEffect, useState } from 'react';
import Issue from './Issue';
import CommentList from './CommentList';
import { CommentContext } from "../context/CommentProvider";
import CommentForm from './commentForm';

export default function IssueList({issues}) {

  const { getComments, comments } = useContext(CommentContext);

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
    <div className="issue-list">
      {issues.map(issue => (
        <div className="comment-section" key={issue._id}>
          <Issue {...issue} />
          <div className="comment-btn-wrapper">
          <button>
          <span><i className="fa-regular fa-thumbs-up"></i> Like</span>
          </button>
          <button onClick={() => setCurrentIssueId(currentIssueId === issue._id ? null : issue._id)}>
            {currentIssueId === issue._id ?  <span><i className="fa-regular fa-comment"></i> Comments {comments.length}</span> : <span><i className="fa-regular fa-comment"></i> Comments</span>}
          </button>
          </div>
          {currentIssueId === issue._id && (
            <>
              <CommentForm issueId={issue._id} />
              {showComments && <CommentList comments={comments} issueId={issue._id} />}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

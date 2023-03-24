import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  const { comments, issueId } = props;

  // Filter the comments that belong to the current issue
  const filteredComments = comments.filter(comment => comment.issue === issueId);

  return (
    <div className="comment-list">
      {filteredComments.map(comment => (
        <Comment {...comment} key={comment._id} issueId={issueId} />
      ))}
    </div>
  );
}

export default CommentList;


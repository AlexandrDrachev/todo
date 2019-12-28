import React from 'react';

import { useStateValue } from "../../../../state";

const Comment = ({ postId, commentId }) => {

  const { state } = useStateValue();
  const { users, comments, allCommentsView } = state;

  const commentsSort = (id) => {
    return comments.filter((comment) => comment.postIdAddress === id);
  };

  const postComments = commentsSort(postId);
  const viewName = postComments[postComments.length - 1].commentAuthor;
  const commentObj = comments.find((comment) => comment.commentId === commentId);
  const viewComment = postComments[postComments.length - 1].commentText;
  const userObj = users.find((user) => user.userName === viewName);
  const viewAvatar = postComments[postComments.length - 1].authorAvatar;

  return (
    <div className="new-post-comments">
      <div className="comment">
        <div className="user-identificator">
          <img className="user-avatar" src={!allCommentsView ? viewAvatar : commentObj.authorAvatar} alt="not found"/>
          <span>{!allCommentsView ? viewName : commentObj.commentAuthor}</span>
        </div>
        <div className="user-comment">
          {!allCommentsView ? viewComment : commentObj.commentText}
        </div>
        <div className="btn-reply-block">
          <span>view all answers 1</span>
          <button className="btn btn-primary btn-sm" onClick={() => {}}>reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
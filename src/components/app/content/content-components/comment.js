import React from 'react';

import { useStateValue } from "../../../../state";
import Answer from "./answer";
import { onToggleAllAnswersView } from "../content-action";

const Comment = ({ commentId }) => {

  const { state, dispatch } = useStateValue();
  const { comments, answers } = state;
  const commentObj = comments.find((comment) => comment.commentId === commentId);
  const answersSort = answers.filter((answer) => answer.commentIdAddress === commentId);
  const { allAnswersView } = commentObj;

  const viewAnswers = () => {
    if (allAnswersView) {
      return answersSort.map((answer) => {
        const { answerId } = answer;
        return <Answer key={answerId} answerId={answerId}/>
      });
    }
    return null;
  };

  return (
    <div className="new-post-comments">
      <div className="comment">
        <div className="user-identificator">
          <img className="user-avatar" src={commentObj.authorAvatar} alt="not found"/>
          <span>{commentObj.commentAuthor}</span>
        </div>
        <div className="user-comment">
          {commentObj.commentText}
        </div>
        <div className="btn-reply-block">
          {answersSort.length > 0 ?
            <span onClick={() => dispatch(onToggleAllAnswersView(commentId))}>
              {!allAnswersView ? `view all answers ${answersSort.length}` : `hide answers`}
            </span> : null}
          <button className="btn btn-primary btn-sm" onClick={() => {}}>reply</button>
        </div>
      </div>
      {viewAnswers()}
    </div>
  );
};

export default Comment;
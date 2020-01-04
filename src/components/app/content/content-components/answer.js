import React from 'react';
import { useStateValue } from "../../../../state";

const Answer = ({ answerId, commentId }) => {

  const { state, dispatch } = useStateValue();
  const { answers } = state;

  const answerToAnswer = answers.find((answer) => answer.answerIdAddress === answerId);
  const answerToComment = answers.find((answer) => answer.commentIdAddress === commentId);
  console.log('answerToAnswer: ', answerToAnswer);
  console.log('answerToComment: ', answerToComment);

  return (
    <div className="comment-answers">
      <div className="answer">
        <div className="author-indicator">
          <div className="author-avatar">
            <img
              alt="not found"
              src={answerToAnswer ? answerToAnswer.authorAvatar : (answerToComment ? answerToComment.authorAvatar : null)} />
          </div>
          <span>
            {answerToAnswer ? answerToAnswer.answerAuthor : (answerToComment ? answerToComment.answerAuthor : null)}
          </span>
        </div>
        <div className="answer-content">
          <span className="address">
            {answerToAnswer ?
              answerToAnswer.answerAuthorAddress :
              (answerToComment ? answerToComment.answerAuthorAddress : null)},
          </span>
          <span>{answerToAnswer ? answerToAnswer.answerText : (answerToComment ? answerToComment.answerText : null)}</span>
        </div>
        <div className="btn-answer-block">
          <button
            className="btn btn-primary btn-sm">reply</button>
        </div>
      </div>

    </div>
  );
};

export default Answer;
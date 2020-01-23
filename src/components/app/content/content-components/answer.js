import React from 'react';
import { useStateValue } from "../../../../state";

const Answer = ({ answerId, commentId }) => {

  const { state, dispatch } = useStateValue();
  const { answers } = state;

  let answersArr = [];
  for (let i in answers) {
    answersArr.push(answers[i]);
  }
  const answersSort = answersArr.filter((answer) => answer.commentIdAddress === commentId);
  const answerToAnswer = answersSort.find((answer) => answer.answerIdAddress === answerId);
  console.log('answerToAnswer:', answerToAnswer);
  const answerToComment = answersSort.find((answer) => answer.commentIdAddress === commentId);
  console.log('answerToComment:', answerToComment);

  let a = [{id: 1}, {id: 2}, {id: 3}];
  let res = a.reduce((a, b) => {
    return {...a, [b.id]: b};
  }, {});
  console.log(res);

  return (
    <div className="comment-answers">
      <div className="answer">
        <div className="author-indicator">
          <div className="author-avatar">
            <img
              alt="not found"
              src={answerToComment && !answerToAnswer ?
                answerToComment.authorAvatar :
                (answerToComment && answerToAnswer ? answerToAnswer.authorAvatar : null)} />
          </div>
          <span>
            {answerToComment && !answerToAnswer ?
              answerToComment.answerAuthor :
              (answerToComment && answerToAnswer ? answerToAnswer.answerAuthor : null)}
          </span>
        </div>
        <div className="answer-content">
          <span className="address">
            {answerToComment && !answerToAnswer ?
              answerToComment.answerAuthorAddress :
              (answerToComment && answerToAnswer ?
                answerToAnswer.answerAuthorAddress : null)},
          </span>
          <span>{answerToComment && !answerToAnswer ?
            answerToComment.answerText :
            (answerToComment && answerToAnswer ? answerToAnswer.answerText : null)}</span>
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
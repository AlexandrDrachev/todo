import React from 'react';

const Answer = () => {

  return (
    <div className="comment-answers">
      <div className="answer">
        <span>Author, Address</span>
        <span>Text</span>
        <button className="btn btn-primary btn-sm">reply</button>
      </div>
    </div>
  );
};

export default Answer;
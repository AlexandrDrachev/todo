import React from 'react';

const InputText = ({ funcSubmit, commentInputText, funcAddedComment, funcDispatchAction }) => {

  return (
    <form
      onSubmit={funcSubmit}
      className="added-comment">
          <textarea
            value={commentInputText}
            onChange={(e) => funcAddedComment(e)}
            className="form-control new-comment"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="you comment" />
      <div className="btn-new-comment-block">
        <button
          className="btn btn-primary btn-sm">
          added comment
        </button>
        <button
          onClick={() => {}}
          className="btn btn-primary btn-sm">
          auto comment
        </button>
        <span onClick={() => funcDispatchAction()}>
          x</span>
      </div>
    </form>
  );
};

export default InputText;
import React from 'react';

import { useStateValue } from "../../../../state";
import { onToggleAllCommentsView, onCangeNewCommentText,
         defaultCommentInputText, renderNewComment } from "../content-action";
import Comment from "./comment";

const NewPost = ({ postId }) => {

  const { state, dispatch } = useStateValue();
  const { news, comments, newCommentInputText, userAutorisation } = state;

  const post = news.find((post) => post.postId === postId);
  const countComments = comments.filter((comment) => comment.postIdAddress === postId);
  let inputText = null;
  let showComments = post.allCommentsView;

  const onAddedComment = (e) => {
    inputText = e.target.value;
    dispatch(onCangeNewCommentText(inputText));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(renderNewComment(renderComment(
      postId,
      comments.length + 1,
      userAutorisation.userName,
      userAutorisation.userAvatar,
      newCommentInputText
    )));
    dispatch(defaultCommentInputText());
  };

  const renderComment = (postId, commentId, commentAuthor, commentAvavtar, commentText) => {
    return {
      postIdAddress: postId,
      commentId: commentId,
      commentAuthor: commentAuthor,
      authorAvatar: commentAvavtar,
      commentText: commentText
    };
  };

  const viewComments = () => {
    const commentsSort = comments.filter((comment) => comment.postIdAddress === postId);
    const commentsReverse = commentsSort.reverse();
    if (showComments) {
      return commentsReverse.map((comment) => {
        const { commentId, postIdAddress } = comment;
        return postIdAddress === postId && <Comment key={commentId} commentId={commentId} />
      });
    }
    const { commentId } = commentsReverse[0];
    if (!showComments) {
      return <Comment key={commentId} commentId={commentId} />
    }
  };

  return (
    <div className="new-post-item-rel">
      <div className="new-post-item">
        <div className="new-post">
          <div className="new-post-img-div">
            <img className="new-post-img" src={post.postImgUrl} alt="not found"/>
          </div>
          <div className="new-post-info">
            <div className="info-text" >
              {post.postInfo}
            </div>
            {
              countComments.length > 1 ?
              <span
              onClick={() => dispatch(onToggleAllCommentsView(postId))}
              className="count-comment">
              {!showComments ? `view all comments ${countComments.length}` :
                `hide comments`}
            </span> : null
            }
          </div>
        </div>
        <InputNewComment funcOnSubmit={onSubmit}
                         stateInputText={newCommentInputText}
                         funcAddedComment={onAddedComment}
                         inputText={inputText}
                         dispatch={dispatch}
                         action1={onCangeNewCommentText} />
        <form
          onSubmit={onSubmit}
          className="added-comment">
          <textarea
            value={newCommentInputText}
            onChange={(e) => onAddedComment(e)}
            className="form-control new-comment"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="you comment" />
          <div className="btn-new-comment-block">
            <button
              onClick={() => inputText ? dispatch(onCangeNewCommentText(inputText)) : null}
              className="btn btn-primary btn-sm">
              added comment
            </button>
            <button
              onClick={() => {}}
              className="btn btn-primary btn-sm">
              auto comment
            </button>
          </div>
        </form>
        <div className="comments-container">
          {viewComments()}
        </div>
      </div>
    </div>
  );
};

export default NewPost

export const InputNewComment = ({ funcOnSubmit, stateInputText, funcAddedComment, inputText, dispatch, action1 }) => {

  return (
    <form
      onSubmit={funcOnSubmit}
      className="added-comment">
          <textarea
            value={stateInputText}
            onChange={(e) => funcAddedComment(e)}
            className="form-control new-comment"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="you comment" />
      <div className="btn-new-comment-block">
        <button
          onClick={() => inputText ? dispatch(action1(inputText)) : null}
          className="btn btn-primary btn-sm">
          added comment
        </button>
        <button
          onClick={() => {}}
          className="btn btn-primary btn-sm">
          auto comment
        </button>
      </div>
    </form>
  );
};
import React from 'react';

import { useStateValue } from "../../../../state";
import { onToggleAllCommentsView, onCangeNewCommentText,
         defaultCommentInputText, renderNewComment, onToggleEntryFieldComment, onToggleAllCommentsView1 } from "../content-action";
import Comment from "./comment";
import InputText from "./input-text";

const NewPost = ({ postId }) => {

  const { state, dispatch } = useStateValue();
  const { news, posts, comments, newCommentInputText, userAutorisation } = state;

  const post = news.find((post) => post.postId === postId);
  const countComments = comments.filter((comment) => comment.postIdAddress === postId);

  // let showComments = post.allCommentsView;
  let showComments = posts[postId].allCommentsView;
  let showInput = post.entryFieldComment;

  const funcTest = () => {
    dispatch(onToggleAllCommentsView1(postId));
    console.log(posts[postId].allCommentsView);
  };

  const onAddedComment = (e) => {
    return dispatch(onCangeNewCommentText(e.target.value));
  };

  const onSubmit = (e) => {
    if (newCommentInputText) {
      e.preventDefault();
      dispatch(renderNewComment(renderComment(
        postId,
        comments.length + 1,
        userAutorisation.userName,
        userAutorisation.userAvatar,
        newCommentInputText
      )));
      dispatch(defaultCommentInputText());
      dispatch(onToggleEntryFieldComment(postId));
    }
    e.preventDefault();
    dispatch(defaultCommentInputText());
    dispatch(onToggleEntryFieldComment(postId));
  };

  const renderComment = (postId, commentId, commentAuthor, commentAvavtar, commentText) => {
    return {
      entryFieldComment: false,
      allAnswersView: false,
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

  const dispatchAction = () => {
    return dispatch(onToggleEntryFieldComment(postId));
  };

  return (
    <div className="new-post-item-rel">
      <div className="new-post-item">
        <div className="new-post">
          <div className="new-post-img-div">
            <img className="new-post-img" src={post.postImgUrl} alt="not found" onClick={funcTest}/>
          </div>
          <div className="new-post-info">
            <div className="info-text" >
              {post.postInfo}
            </div>
            <div className="comments-operation">
              {
                countComments.length > 1 ?
                  <span
                    onClick={() => dispatch(onToggleAllCommentsView(postId))}>
              {!showComments ? `view all comments ${countComments.length}` :
                `hide comments`}
            </span> : null
              }
              <span onClick={() => dispatch(onToggleEntryFieldComment(postId))}>
                {!showInput ? `your comment` : null}
              </span>
            </div>
          </div>
        </div>
        { showInput ? <InputText funcSubmit={onSubmit}
                       commentInputText={newCommentInputText}
                       funcAddedComment={onAddedComment}
                       funcDispatchAction={dispatchAction} /> : null }
        <div className="comments-container">
          {viewComments()}
        </div>
      </div>
    </div>
  );
};

export default NewPost
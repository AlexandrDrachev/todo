import React from 'react';

import { useStateValue } from "../../../../state";
import { onToggleAllCommentsView } from "../content-action";
import Comment from "./comment";

const NewPost = ({ postId }) => {

  const { state, dispatch } = useStateValue();
  const { news, allCommentsView, comments } = state;

  const post = news.find((post) => post.postId === postId);
  const countComments = comments.filter((comment) => comment.postIdAddress === postId);

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
              onClick={() => dispatch(onToggleAllCommentsView())}
              className="count-comment">
              {!allCommentsView ? `view all comments ${countComments.length}` :
                `hide comments`}
            </span> : null
            }
          </div>
        </div>
        <div className="added-comment">
          <textarea className="form-control new-comment" id="exampleFormControlTextarea1" rows="2" placeholder="you comment" />
          <button
            onClick={() => {}}
            className="btn btn-primary btn-sm">
            add
          </button>
        </div>
        <div className="comments-container">
          {
            !allCommentsView ? <Comment postId={postId} /> :
            comments.reverse().map((comment) => {
              const { commentId, postIdAddress } = comment;
              return postIdAddress === postId ? <Comment key={commentId} postId={postId} commentId={commentId} /> : null;
            })
          }
        </div>
      </div>
    </div>
  );
};

export default NewPost
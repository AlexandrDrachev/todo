import React, { useEffect, useCallback } from 'react';

import { testContentValue } from "./content-action";
import { useStateValue } from "../../../state";
import Sidebar from "../sidebar";
import newsIt from '../../../images/news-image.jpg';
import ApiService from "../../../services";

const _ = require("lodash");

const Comment = ({ postId }) => {

  const { state, dispatch } = useStateValue();
  const { users, news, comments, answers } = state;
  console.log(users);

  const commentsSort = (id) => {
    return comments.filter((comment) => comment.postIdAddress === id);
  };

  const postComments = commentsSort(postId);
  const viewName = postComments[postComments.length - 1].commentAuthor;
  const viewComment = postComments[postComments.length - 1].commentText;
  const userObj = users.find((user) => user.userName === viewName);
  const viewAvatar = userObj ? userObj.userAvatar : "";

  return (
    <div className="new-post-comments">
      <div className="comment">
        <div className="user-identificator">
          <img className="user-avatar" src={viewAvatar} alt="not found"/>
          <span>{viewName}</span>
        </div>
        <div className="user-comment">
          {viewComment}
        </div>
        <div className="btn-reply-block">
          <span>view all answers 1</span>
          <button className="btn btn-primary btn-sm" onClick={() => {}}>reply</button>
          <button className="btn btn-primary btn-sm" onClick={() => {}}>rep_ly</button>
        </div>
      </div>
    </div>
  );
};

const Content = () => {

  const { state, dispatch } = useStateValue();

  const testFunc = useCallback(() => dispatch(testContentValue('content')), [dispatch]);


  return (
    <div className="content-rel">
      <div className="side-bar-container">
        <Sidebar />
      </div>
      <div className="content-abs">
        <div className="new-post-item-rel">
          <div className="new-post-item">
            <div className="new-post">
              <div className="new-post-img-div">
                <img className="new-post-img" src={newsIt}/>
              </div>
              <div className="new-post-info">
                <div className="info-text" >
                  Информационный блог, который ведет специалист по программированию и информационным технологиям Шванов Вадим.
                  Проект Code blog будет интересен всем, кто хочет быть в курсе всех новостей современных информационных технологий,
                  или чья работа тесно связана с этой сферой.
                </div>
                <span className="count-comment">view all comments 3</span>
              </div>
            </div>
            <div className="added-comment">
              <textarea className="form-control new-comment" id="exampleFormControlTextarea1" rows="2" placeholder="you comment" />
              <button className="btn btn-primary btn-sm">add</button>
            </div>
            <Comment postId={1}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
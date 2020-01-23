
export const testContentValue = (text) => {
  return {
    type: 'TEST_VALUE_CONTENT',
    payload: text
  };
};

// export const onToggleAllCommentsView = (postId) => {
//   return {
//     type: 'ON_TOGGLE_ALL_COMMENTS_VIEW',
//     payload: postId
//   };
// };

export const onToggleAllCommentsView = (postId) => {
  return {
    type: 'ON_TOGGLE_ALL_COMMENTS_VIEW',
    id: postId
  };
};

export const onToggleAllAnswersView = (commentId) => {
  return {
    type: 'ON_TOGGLE_ALL_ANSWERS_VIEW',
    id: commentId
  };
};

export const onCangeNewCommentText = (text) => {
  return {
    type: 'ON_CHANGE_NEW_COMMENT_INPUT_TEXT',
    payload: text
  };
};

export const defaultCommentInputText = () => {
  return {
    type: 'DEFAULT_COMMENT_INPUT_TEXT'
  };
};

export const renderNewComment = (commentId, commentObj) => {
  return {
    type: 'RENDER_NEW_COMMENT',
    id: commentId,
    payload: commentObj
  };
};

export const onToggleEntryFieldComment = (postId) => {
  return {
    type: 'ON_TOGGLE_ENTRY_FIELD_COMMENT',
    id: postId
  };
};

export const onToggleEntryFieldAnswer = (commentId) => {
  return {
    type: 'ON_TOGGLE_ENTRY_FIELD_ANSWER',
    payload: commentId
  };
};
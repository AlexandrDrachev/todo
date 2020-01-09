
export const testContentValue = (text) => {
  return {
    type: 'TEST_VALUE_CONTENT',
    payload: text
  };
};

export const onToggleAllCommentsView = (postId) => {
  return {
    type: 'ON_TOGGLE_ALL_COMMENTS_VIEW',
    payload: postId
  };
};

export const onToggleAllCommentsView1 = (postId) => {
  return {
    type: 'ON_TOGGLE_ALL_COMMENTS_VIEW_',
    id: postId
  };
};

export const onToggleAllAnswersView = (commentId) => {
  return {
    type: 'ON_TOGGLE_ALL_ANSWERS_VIEW',
    payload: commentId
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

export const renderNewComment = (commentObj) => {
  return {
    type: 'RENDER_NEW_COMMENT',
    payload: commentObj
  };
};

export const onToggleEntryFieldComment = (postId) => {
  return {
    type: 'ON_TOGGLE_ENTRY_FIELD_COMMENT',
    payload: postId
  };
};

export const onToggleEntryFieldAnswer = (commentId) => {
  return {
    type: 'ON_TOGGLE_ENTRY_FIELD_ANSWER',
    payload: commentId
  };
};
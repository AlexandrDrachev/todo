


export const testContentValue = (text) => {
  return {
    type: 'TEST_VALUE_CONTENT',
    payload: text
  };
};

export const onToggleAllCommentsView = () => {
  return {
    type: 'ON_TOGGLE_ALL_COMMENTS_VIEW'
  };
};
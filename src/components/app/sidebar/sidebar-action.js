
export const testSidebarValue = (text) => {
  return {
    type: 'TEST_VALUE_SIDEBAR',
    payload: text
  };
};

export const getUsersData = (usersArr) => {
  return {
    type: 'GET_USERS_DATA',
    payload: usersArr
  };
};
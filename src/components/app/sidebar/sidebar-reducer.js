
export const sidebarInitialState = {
  testValueSidebar: 'test value Sidebar true',
  users: []
};

export const sidebarReducer =  {

  'TEST_VALUE_SIDEBAR': (state, action) => {
    return {
      ...state,
      testValueSidebar: action.payload
    };
  },
  'GET_USERS_DATA': (state, action) => {
    return {
      ...state,
      users: action.payload
    };
  }
};
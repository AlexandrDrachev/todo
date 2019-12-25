
export const headerInitialState = {
  testValueHeader: 'test value Header true'
};

export const headerReducer =  {

  'TEST_VALUE_HEADER': (state, action) => {
    return {
      ...state,
      testValueHeader: action.payload
    };
  },
  'TEST2_VALUE_HEADER': (state, action) => {
    return {
      ...state,
      testValueHeader: action.payload
    };
  }
};

export const autorisationInitialState = {
  autorisation: true,
  registration: false,
  reAutorisation: false,
  isAdministrator: false,
  userAutorisation: {
    password: 111,
    userAvatar: "https://via.placeholder.com/150/92c952",
    userId: 1,
    userName: "Leanne Graham",
  },
  saveMe: false
};

export const autorisationReducer = {

  'ON_TOGGLE_AUTORISATION': (state, action) => {
    return {
      ...state,
      autorisation: true,
      registration: false,
      reAutorisation: false,
      userAutorisation: action.payload
    };
  },
  'ON_TOGGLE_REGISTRSTION': (state, action) => {
    return {
      ...state,
      registration: true,
      autorisation: false,
      reAutorisation: false
    };
  },
  'ON_TOGGLE_RE_AUTORISATION': (state, action) => {
    return {
      ...state,
      registration: false,
      autorisation: false,
      reAutorisation: true
    };
  },
  'ON_TOGGLE_SAVE_ME': (state, action) => {
    return {
      ...state,
      saveMe: action.payload
    };
  },
  'USER_EXIT': (state) => {
    return {
      ...state,
      autorisation: false,
      registration: false,
      reAutorisation: false,
      userAutorisation: {}
    };
  }
};
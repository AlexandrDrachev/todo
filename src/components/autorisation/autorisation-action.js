
export const onToggleAutorisation = (userObj) => {
  return {
    type: 'ON_TOGGLE_AUTORISATION',
    payload: userObj
  };
};

export const onToggleRegistration = () => {
  return {
    type: 'ON_TOGGLE_REGISTRSTION'
  };
};

export const onToggleReAutorisation = () => {
  return {
    type: 'ON_TOGGLE_RE_AUTORISATION'
  };
};

export const onToggleSaveMe = (bool) => {
  return {
    type: 'ON_TOGGLE_SAVE_ME',
    payload: bool
  };
};

export const onUserExit = () => {
  return {
    type: 'USER_EXIT'
  };
};
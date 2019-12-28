
export const onToggleAutorisation = (userObj) => {
  console.log('auturisation');
  return {
    type: 'ON_TOGGLE_AUTORISATION',
    payload: userObj
  };
};

export const onToggleRegistration = () => {
  console.log('reAuturisation');
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
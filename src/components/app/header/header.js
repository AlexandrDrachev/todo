import React, { useCallback } from 'react';

import { useStateValue } from "../../../state";
import { onUserExit } from "../../autorisation/autorisation-action";

const Header = () => {

  const { state, dispatch } = useStateValue();
  const { userAutorisation, autorisation } = state;

  const getExit = useCallback(() => dispatch(onUserExit()), [dispatch]);

  const userLogin = () => {
    return (
      <div className="user-login-details">
        <span
          onClick={() => getExit()}
          className="user-exit">
          Exit</span>
        <span>Hello,</span>
        <span className="user-login">{userAutorisation.userName}</span>
      </div>
    );
  };

  return (
    <div className="header">
      <h3>News IT</h3>
      {autorisation ? userLogin() : null}
    </div>
  );
};

export default Header;
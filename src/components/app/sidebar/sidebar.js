import React, { useEffect, useCallback } from 'react';

import { getUsersData } from "./sidebar-action";
import { onToggleAutorisation } from "../../autorisation/autorisation-action";
import { useStateValue } from "../../../state";
import ApiService from "../../../services";

const Sidebar = () => {

  const { state, dispatch } = useStateValue();
  const { users } = state;
  const newUsers = useCallback((result) => dispatch(getUsersData(result)), [dispatch]);
  const onChangeUser = (id) => {
    const userObj = users.find((user) => user.userId === id);
    return dispatch(onToggleAutorisation(userObj));
  };

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      const api = new ApiService();
      const result = !cancel && await api.getTransformUsers();
      newUsers(result);
    };
    fetchData();

    return () => cancel = true;
  }, [dispatch, newUsers]);

  const userOnLine = () => {
    return users.map((user) => {
      return (
        <div
          onClick={() => onChangeUser(user.userId)}
          key={user.userId}
          className="user-item">
          <div className="div-ava">
            <img className="sidebar-avatar" alt=" not found" src={user.userAvatar}/>
          </div>
          <span>{user.userName}</span>
        </div>
      );
    });
  };

  return (
    <div className="side-bar">
      <div>on-line:</div>
      {users.length ? userOnLine() : '...loading'}
    </div>
  );
};

export default Sidebar;
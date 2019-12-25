import React, { useEffect, useCallback, useMemo } from 'react';

import { testSidebarValue, getUsersData } from "./sidebar-action";
import { useStateValue } from "../../../state";
import ApiService from "../../../services";

const Sidebar = () => {

  const { state, dispatch } = useStateValue();
  const { users } = state;
  const newUsers = useCallback((result) => dispatch(getUsersData(result)), [dispatch]);
  const testFunc = useCallback(() => dispatch(testSidebarValue('sidebar')), [dispatch]);

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      const api = new ApiService();
      const result = !cancel && await api.getTransformUsers();
      newUsers(result);
    };
    fetchData();

    return () => cancel = true;
  }, [dispatch]);

  const userOnLine = () => {
    return users.map((user) => {
      return (
        <div key={user.userId} className="user-item">
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
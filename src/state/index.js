import React, { createContext, useContext, useReducer } from 'react';

import { contentInitialState, contentReducer } from "../components/app/content/content-reducer";
import { headerInitialState, headerReducer } from "../components/app/header/header-reducer";
import { sidebarInitialState, sidebarReducer } from "../components/app/sidebar/sidebar-reducer";

const initialState = {
  ...contentInitialState,
  ...headerInitialState,
  ...sidebarInitialState
};

export const StateContext = createContext(initialState);

const Actions = {
  ...contentReducer,
  ...headerReducer,
  ...sidebarReducer
};

const reducer = (state, action) => {

  const actions = Actions[action.type];
  const update = actions(state, action);
  return {...state, ...update};
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      { children }
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  const { state, dispatch } = useContext(StateContext);
  return { state, dispatch };
};
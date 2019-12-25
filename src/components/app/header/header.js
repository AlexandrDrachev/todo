import React, { useEffect, useCallback } from 'react';

import { testValueHeader } from "./header-action";
import { useStateValue } from "../../../state";

const Header = () => {

  const { state, dispatch } = useStateValue();

  const testFunc =
    useCallback(() => dispatch(testValueHeader('header ')), [dispatch]);

  return (
    <div className="header">Header</div>
  );
};

export default Header;
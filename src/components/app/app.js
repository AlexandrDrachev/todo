import React from 'react';

import Header from "./header";
import Content from "./content";
import { useStateValue } from "../../state";

const App = () => {

  const { state } = useStateValue();

  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <Content />
      </div>
    </div>
  );
};

export default App;
import React from 'react';

import Header from "./header";
import Content from "./content";

const App = () => {

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
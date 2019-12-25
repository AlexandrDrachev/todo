import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './style.css';

import { StateProvider } from "./state";
import App from "./components/app";

ReactDOM.render(
  <StateProvider >
    <Router>
      <App />
    </Router>
  </ StateProvider>,
  document.getElementById('root'));



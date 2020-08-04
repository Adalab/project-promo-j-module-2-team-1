import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
//import "./stylesheets/core/reset.scss";
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

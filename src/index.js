import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { CompatRouter } from 'react-router-dom-v5-compat';

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory();
root.render(
  <Router history={history}>
    <CompatRouter>
      <App />
    </CompatRouter>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

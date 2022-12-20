import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login';
import GlobalStyle from './Styles/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);


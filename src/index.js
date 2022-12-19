import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes';
import GlobalStyle from './Styles/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);


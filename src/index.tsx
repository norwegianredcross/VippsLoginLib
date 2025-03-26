import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import Digdir design system CSS
import '@digdir/designsystemet-theme';
import './App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

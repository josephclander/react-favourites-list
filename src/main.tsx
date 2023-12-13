import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// the exclamation mark is there to state that the root element will definitely be there
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

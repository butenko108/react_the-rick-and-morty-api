import React from 'react';
import ReactDOM from 'react-dom/client';

import './app/styles/index.css';
import App from './app/App';
import { MaterialUIProvider } from './app/providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MaterialUIProvider>
      <App />
    </MaterialUIProvider>
  </React.StrictMode>,
);

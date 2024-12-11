import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { AuthProvider } from './auth/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </AuthProvider>
);
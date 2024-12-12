import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { AuthProvider } from './auth/AuthProvider';
import { ThemeProvider } from '@mui/material';
import Theme from './assets/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <AuthProvider>
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </AuthProvider>
  
);
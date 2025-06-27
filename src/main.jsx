import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
   <ThemeProvider>
    <App />
    </ThemeProvider>
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Pastikan impor App.js dari file utama
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render komponen App yang berisi Router */}
  </React.StrictMode>
);

// Jika ingin mengukur kinerja aplikasi, Anda bisa menggunakan reportWebVitals
reportWebVitals();

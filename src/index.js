import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Помещаем BrowserRouter здесь

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> {/* Только здесь оборачиваем приложение в Router */}
    <App />
  </Router>
);

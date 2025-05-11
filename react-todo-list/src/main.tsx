import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ponto de entrada da aplicação React.
// Aqui é onde o React renderiza o componente App dentro da div #root do index.html.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

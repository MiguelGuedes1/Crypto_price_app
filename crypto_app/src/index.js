import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './Componentes/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <NavBar/>
        <App />
  </React.StrictMode>
);



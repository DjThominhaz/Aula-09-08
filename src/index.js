import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CompoRend from '../src/Componentes/CompoRend'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CompoRend/>
  </React.StrictMode>
);

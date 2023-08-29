import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o Bootstrap CSS
import { App } from './App.tsx';
import { Nav } from './components/nav/index.tsx';
import './components/record/app';


ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
      <Nav/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
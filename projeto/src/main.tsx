import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o Bootstrap CSS
import { App } from './App.tsx';

ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


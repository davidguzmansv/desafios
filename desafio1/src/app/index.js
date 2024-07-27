// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import JsonData from './components/JsonData';
import './components/viewer.module.css';

ReactDOM.render(
  <React.StrictMode>
    <JsonData />
  </React.StrictMode>,
  document.getElementById('root')
);

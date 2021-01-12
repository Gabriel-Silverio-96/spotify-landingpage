import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

//Style
import './assets/style/main.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
  ,document.getElementById('root')
);
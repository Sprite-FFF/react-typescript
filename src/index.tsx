import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/common.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Routes from './Routes'

import registerServiceWorker from './registerServiceWorker';

  const History = createBrowserHistory()

  ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL} history= {History}>
      <Routes />
    </Router>,
    document.getElementById('root'));
  registerServiceWorker();

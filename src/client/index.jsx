// Import Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// Import React Components
import Routes from './routes/Routes.jsx';

// Import Style Component
import './index.scss';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app')
);

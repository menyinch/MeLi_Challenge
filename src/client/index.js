import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App.jsx';

const app = <App />;

ReactDom.hydrate(app, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-mdl/extra/material.css';
// import 'react-mdl/extra/material.js';
// import { env } from './config';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

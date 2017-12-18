import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Count from './components/Count'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Count />, document.getElementById('root'));
registerServiceWorker();

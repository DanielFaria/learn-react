import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Count from './components/Count'
import Hello from './components/StateLessHello.js'
import registerServiceWorker from './registerServiceWorker';
//I can encapsulate a cointainer component like  that?
//Eu não sabia. 
let app = <div> <Hello name={"React !!!"}/> <Count /> </div>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

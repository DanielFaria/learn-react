import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {Person, Student, Traveller}  from  './components/inheritance/Persons'
import Count from './components/Count'
import Hello from './components/StateLessHello.js'
import registerServiceWorker from './registerServiceWorker';
//I can encapsulate a cointainer component like  that?
//Eu não sabia. 
let app = <div><Person  name={"That`s a sample person"}/> <Student name={"Student"}/> <Traveller name={"Travller"}/> <Hello name={"React !!!"}/> <Count /> </div>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

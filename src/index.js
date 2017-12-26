import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Person, Student, Traveller } from './components/inheritance/Persons'
import Count from './components/Count';
import { CoinList } from './components/bind/BindAlert';
import Hello from './components/StateLessHello.js'
import registerServiceWorker from './registerServiceWorker';

const coins = ['Bitcoin', 'Verge', 'BitCoin Gold'];
// I can encapsulate a cointainer component like  that?
// Eu não sabia.
// let app = <div><Person  name={"That`s a sample person"}/> <Student name={"Student"}/> <Traveller name={"Travller"}/> <Traveller /> <Hello name={"React !!!"}/> <Count />
// <CoinList coins={coins} />
// </div>;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React, { Component } from 'react';
import './App.css';
import FormCoin from './components/coins/FormCoin';
import Count    from './components/Count';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FormCoin />
        <Count />
      </div>
    );
  }
}

export default App;

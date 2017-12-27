import React, {Component} from 'react';
import ListCoin from './ListCoin'


export default class FormCoin extends Component {

      constructor(props){
        super(props);
        this.state = {coins: [], erros:[]};
        //this.addNewCoin = this.addNewCoin.bind(this);
        this.removeCoin = this.removeCoin.bind(this);
                 
        
      }
      
      /**
       * LifeCycle doesn`t exists in stateless component
       */
      componentDidMount(){
        console.log('Did Mount');
        try{
          /**
           * @Doubt the state changes here, so 
           * update mount is called too.
           */
          const json  = localStorage.getItem('coins');
          const coins = JSON.parse(json);
          if(coins){
              this.setState(() => ({coins: coins}));
          }
        }catch(e){

        }
        
      }
      
      componentDidUpdate(prevProps, prevState){
        if(prevState.coins.length !== this.state.coins.length){
          console.log('Let save some data');
          const jsonCoins = JSON.stringify(this.state.coins);
          localStorage.setItem('coins', jsonCoins);
        }
        console.log('Did updade');
      }

      componentWillUnmount(){
        console.log('Component will be gone');
      }

      addNewCoin = (e) => {
        const coin = e.target.elements.coinName.value;
        console.log(coin);
        if (!coin){
          console.log('Is empty');
        }



        this.setState((prevState) => ({ coins: prevState.coins.concat(coin)}));
        e.preventDefault();
        e.target.reset();
      }
      //@Error: why i can`t get to call this method?
      handleNewCoin = (coin) => {
        
      }
      removeCoin(coinToRemove){
        console.log('The coin to be removed just arrived', coinToRemove);
        this.setState((prevState) => ({ coins: prevState.coins.filter((coin) => coinToRemove !== coin )}   ));
      }

      render(){
        return (
          <div align="center" >
            <form  onSubmit={this.addNewCoin}>
                <h3> New Coins Must Inserted Here </h3>
                Coin Name:  <input name="coinName" />
                <button >New</button> 
                 
            </form>
            <ListCoin coins={this.state.coins}  removeCoinHandle={this.removeCoin}/> 
          </div>
        ); 
      }
}    
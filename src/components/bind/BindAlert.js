import React, {Component} from 'react';

export class CoinList extends Component {
    
   /**
    * O componente automaticamente  
    * @param {*
    } props 
    */
   constructor(props){
      super(props);
      this.doSomething = this.doSomething.bind(this);
      this.state = {coins: this.props.coins, light:true };
      //this.props.coins = this.props.coins || [];
   }
   
   controlLight =()=> {
    this.setState(() => ({ light: !this.state.light}));
   }

   doSomething(){
       alert('Something must be done here !!!!!! Use this props:' + this.props );
    }
    
   clear = () => {
        console.log("clear");
        this.setState(() => ({ coins: []}));
        //this.props.coins = [];
    }
    render(){
      return (
        <div align="center" id="opaco">
           <h3>Coins  is expected </h3>
           <button onClick={this.controlLight}>{this.state.light? "ON": "OFF" } </button>
           <button onClick={this.doSomething}> Do something  </button>
           <button onClick={this.clear}> Clear Projects  </button>
           <h3>Some Coins  </h3>
          {this.state.coins.map((coin) => <li key={coin}>{coin} </li>   )}
        </div>
      ); 
    }
} 

CoinList.defaultProps = {
    coins: []
  };


/*
CoinList.propTypes = {
    coins: PropTypes.arrayOf(PropTypes.string)
};
*/
